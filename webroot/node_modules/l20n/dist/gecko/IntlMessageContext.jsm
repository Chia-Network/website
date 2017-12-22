/* vim: set ts=2 et sw=2 tw=80 filetype=javascript: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/*  eslint no-magic-numbers: [0]  */

const MAX_PLACEABLES = 100;

/**
 * The `Parser` class is responsible for parsing FTL resources.
 *
 * It's only public method is `getResource(source)` which takes an FTL string
 * and returns a two element Array with an Object of entries generated from the
 * source as the first element and an array of SyntaxError objects as the
 * second.
 *
 * This parser is optimized for runtime performance.
 *
 * There is an equivalent of this parser in syntax/parser which is
 * generating full AST which is useful for FTL tools.
 */
class RuntimeParser {
  /**
   * @param {string} string
   * @returns {Array<Object, Array>}
   */
  getResource(string) {
    this._source = string;
    this._index = 0;
    this._length = string.length;

    const entries = {};
    const errors = [];

    this.getWS();
    while (this._index < this._length) {
      try {
        this.getEntry(entries);
      } catch (e) {
        if (e instanceof SyntaxError) {
          errors.push(e);

          const nextEntity = this._findNextEntryStart();
          this._index = nextEntity === -1
            ? this._length
            : nextEntity;
        } else {
          throw e;
        }
      }
      this.getWS();
    }

    return [entries, errors];
  }

  getEntry(entries) {
    // The pointer here should either be at the beginning of the file
    // or right after new line.
    if (this._index !== 0 &&
        this._source[this._index - 1] !== '\n') {
      throw this.error('Expected new line and a new entry');
    }

    const ch = this._source[this._index];

    // We don't care about comments or sections at runtime
    if (ch === '/') {
      this.getComment();
      return;
    }

    if (ch === '[') {
      this.getSection();
      return;
    }

    if (ch !== '\n') {
      this.getMessage(entries);
    }
  }

  getSection() {
    this._index += 1;
    if (this._source[this._index] !== '[') {
      throw this.error('Expected "[[" to open a section');
    }

    this._index += 1;

    this.getLineWS();
    this.getSymbol();
    this.getLineWS();

    if (this._source[this._index] !== ']' ||
        this._source[this._index + 1] !== ']') {
      throw this.error('Expected "]]" to close a section');
    }

    this._index += 2;

    // sections are ignored in the runtime ast
    return undefined;
  }

  getMessage(entries) {
    const id = this.getIdentifier();
    let attrs = null;
    let tags = null;

    this.getLineWS();

    let ch = this._source[this._index];

    let val;

    if (ch === '=') {
      this._index++;

      this.getLineWS();

      val = this.getPattern();
    } else {
      this.getWS();
    }

    ch = this._source[this._index];

    if (ch === '\n') {
      this._index++;
      this.getLineWS();
      ch = this._source[this._index];
    }

    if (ch === '.') {
      attrs = this.getAttributes();
    }

    if (ch === '#') {
      if (attrs !== null) {
        throw this.error('Tags cannot be added to a message with attributes.');
      }
      tags = this.getTags();
    }

    if (tags === null && attrs === null && typeof val === 'string') {
      entries[id] = val;
    } else {
      if (val === undefined) {
        if (tags === null && attrs === null) {
          throw this.error(`Expected a value (like: " = value") or
            an attribute (like: ".key = value")`);
        }
      }

      entries[id] = { val };
      if (attrs) {
        entries[id].attrs = attrs;
      }
      if (tags) {
        entries[id].tags = tags;
      }
    }
  }

  getWS() {
    let cc = this._source.charCodeAt(this._index);
    // space, \n, \t, \r
    while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
      cc = this._source.charCodeAt(++this._index);
    }
  }

  getLineWS() {
    let cc = this._source.charCodeAt(this._index);
    // space, \t
    while (cc === 32 || cc === 9) {
      cc = this._source.charCodeAt(++this._index);
    }
  }

  getIdentifier() {
    const start = this._index;
    let cc = this._source.charCodeAt(this._index);

    if ((cc >= 97 && cc <= 122) || // a-z
        (cc >= 65 && cc <= 90) ||  // A-Z
        cc === 95) {               // _
      cc = this._source.charCodeAt(++this._index);
    } else {
      throw this.error('Expected an identifier (starting with [a-zA-Z_])');
    }

    while ((cc >= 97 && cc <= 122) || // a-z
           (cc >= 65 && cc <= 90) ||  // A-Z
           (cc >= 48 && cc <= 57) ||  // 0-9
           cc === 95 || cc === 45) {  // _-
      cc = this._source.charCodeAt(++this._index);
    }

    return this._source.slice(start, this._index);
  }

  getSymbol() {
    let name = '';

    const start = this._index;
    let cc = this._source.charCodeAt(this._index);

    if ((cc >= 97 && cc <= 122) || // a-z
        (cc >= 65 && cc <= 90) ||  // A-Z
        cc === 95 || cc === 32) {  //  _
      cc = this._source.charCodeAt(++this._index);
    } else if (name.length === 0) {
      throw this.error('Expected a keyword (starting with [a-zA-Z_])');
    }

    while ((cc >= 97 && cc <= 122) || // a-z
           (cc >= 65 && cc <= 90) ||  // A-Z
           (cc >= 48 && cc <= 57) ||  // 0-9
           cc === 95 || cc === 45 || cc === 32) {  //  _-
      cc = this._source.charCodeAt(++this._index);
    }

    // If we encountered the end of name, we want to test is the last
    // collected character is a space.
    // If it is, we will backtrack to the last non-space character because
    // the keyword cannot end with a space character.
    while (this._source.charCodeAt(this._index - 1) === 32) {
      this._index--;
    }

    name += this._source.slice(start, this._index);

    return { type: 'sym', name };
  }

  getString() {
    let value = '';

    while (++this._index < this._length) {
      const ch = this._source[this._index];

      if (ch === '"') {
        break;
      }

      if (ch === '\n') {
        break;
      }

      value += ch;
    }

    this._index++;
    return value;
  }

  // We're going to first try to see if the pattern is simple.
  // If it is we can just look for the end of the line and read the string.
  //
  // Then, if either the line contains a placeable opening `{` or the
  // next line starts with a pipe `|`, we switch to complex pattern.
  getPattern() {
    const start = this._index;
    let eol = this._source.indexOf('\n', this._index);

    if (eol === -1) {
      eol = this._length;
    }

    const line = start !== eol ?
      this._source.slice(start, eol) : undefined;

    if (line !== undefined && line.includes('{')) {
      return this.getComplexPattern();
    }

    this._index = eol + 1;

    if (this._source[this._index] === ' ') {
      this._index = start;
      return this.getComplexPattern();
    }

    return line;
  }

  /* eslint-disable complexity */
  getComplexPattern() {
    let buffer = '';
    const content = [];
    let placeables = 0;

    let ch = this._source[this._index];

    // If the string starts with \", \{ or \\ skip the first `\` and add the
    // following character to the buffer without interpreting it.
    if (ch === '\\' &&
      (this._source[this._index + 1] === '"' ||
       this._source[this._index + 1] === '{' ||
       this._source[this._index + 1] === '\\')) {
      buffer += this._source[this._index + 1];
      this._index += 2;
      ch = this._source[this._index];
    }

    while (this._index < this._length) {
      // This block handles multi-line strings combining strings seaprated
      // by new line and `|` character at the beginning of the next one.
      if (ch === '\n') {
        this._index++;
        if (this._source[this._index] !== ' ') {
          break;
        }
        this.getLineWS();

        if (
            this._source[this._index] === '}' ||
            this._source[this._index] === '[' ||
            this._source[this._index] === '*' ||
            this._source[this._index] === '#' ||
            this._source[this._index] === '.'
        ) {
          break;
        }

        if (buffer.length) {
          buffer += '\n';
        }
        ch = this._source[this._index];
        continue;
      } else if (ch === '\\') {
        const ch2 = this._source[this._index + 1];
        if (ch2 === '"' || ch2 === '{') {
          ch = ch2;
          this._index++;
        }
      } else if (ch === '{') {
        // Push the buffer to content array right before placeable
        if (buffer.length) {
          content.push(buffer);
        }
        if (placeables > MAX_PLACEABLES - 1) {
          throw this.error(
            `Too many placeables, maximum allowed is ${MAX_PLACEABLES}`);
        }
        buffer = '';
        content.push(this.getPlaceable());

        this._index++;

        ch = this._source[this._index];
        placeables++;
        continue;
      }

      if (ch) {
        buffer += ch;
      }
      this._index++;
      ch = this._source[this._index];
    }

    if (content.length === 0) {
      return buffer.length ? buffer : undefined;
    }

    if (buffer.length) {
      content.push(buffer);
    }

    return content;
  }
  /* eslint-enable complexity */

  getPlaceable() {
    const start = ++this._index;

    this.getWS();

    if (this._source[this._index] === '*' ||
       (this._source[this._index] === '[' &&
        this._source[this._index + 1] !== ']')) {
      const variants = this.getVariants();

      return {
        type: 'sel',
        exp: null,
        vars: variants[0],
        def: variants[1]
      };
    }

    // Rewind the index and only support in-line white-space now.
    this._index = start;
    this.getLineWS();

    const selector = this.getSelectorExpression();
    let variants;

    this.getWS();

    const ch = this._source[this._index];

    // If the expression is followed by `->` we're going to collect
    // its members and return it as a select expression.
    if (ch !== '}') {
      if (ch !== '-' || this._source[this._index + 1] !== '>') {
        throw this.error('Expected "}", "," or "->"');
      }

      this._index += 2; // ->

      this.getLineWS();

      if (this._source[this._index] !== '\n') {
        throw this.error('Variants should be listed in a new line');
      }

      this.getWS();

      variants = this.getVariants();

      if (variants[0].length === 0) {
        throw this.error('Expected members for the select expression');
      }
    }

    if (variants === undefined) {
      return selector;
    }
    return {
      type: 'sel',
      exp: selector,
      vars: variants[0],
      def: variants[1]
    };
  }

  getSelectorExpression() {
    const literal = this.getLiteral();

    if (literal.type !== 'ref') {
      return literal;
    }

    if (this._source[this._index] === '.') {
      this._index++;

      const name = this.getIdentifier();
      this._index++;
      return {
        type: 'attr',
        id: literal,
        name
      };
    }

    if (this._source[this._index] === '[') {
      this._index++;

      const key = this.getVariantKey();
      this._index++;
      return {
        type: 'var',
        id: literal,
        key
      };
    }

    if (this._source[this._index] === '(') {
      this._index++;
      const args = this.getCallArgs();

      this._index++;

      literal.type = 'fun';

      return {
        type: 'call',
        fun: literal,
        args
      };
    }

    return literal;
  }

  getCallArgs() {
    const args = [];

    if (this._source[this._index] === ')') {
      return args;
    }

    while (this._index < this._length) {
      this.getLineWS();

      const exp = this.getSelectorExpression();

      // MessageReference in this place may be an entity reference, like:
      // `call(foo)`, or, if it's followed by `:` it will be a key-value pair.
      if (exp.type !== 'ref' ||
         exp.namespace !== undefined) {
        args.push(exp);
      } else {
        this.getLineWS();

        if (this._source[this._index] === ':') {
          this._index++;
          this.getLineWS();

          const val = this.getSelectorExpression();

          // If the expression returned as a value of the argument
          // is not a quote delimited string or number, throw.
          //
          // We don't have to check here if the pattern is quote delimited
          // because that's the only type of string allowed in expressions.
          if (typeof val === 'string' ||
              Array.isArray(val) ||
              val.type === 'num') {
            args.push({
              type: 'narg',
              name: exp.name,
              val
            });
          } else {
            this._index = this._source.lastIndexOf(':', this._index) + 1;
            throw this.error(
              'Expected string in quotes, number.');
          }

        } else {
          args.push(exp);
        }
      }

      this.getLineWS();

      if (this._source[this._index] === ')') {
        break;
      } else if (this._source[this._index] === ',') {
        this._index++;
      } else {
        throw this.error('Expected "," or ")"');
      }
    }

    return args;
  }

  getNumber() {
    let num = '';
    let cc = this._source.charCodeAt(this._index);

    // The number literal may start with negative sign `-`.
    if (cc === 45) {
      num += '-';
      cc = this._source.charCodeAt(++this._index);
    }

    // next, we expect at least one digit
    if (cc < 48 || cc > 57) {
      throw this.error(`Unknown literal "${num}"`);
    }

    // followed by potentially more digits
    while (cc >= 48 && cc <= 57) {
      num += this._source[this._index++];
      cc = this._source.charCodeAt(this._index);
    }

    // followed by an optional decimal separator `.`
    if (cc === 46) {
      num += this._source[this._index++];
      cc = this._source.charCodeAt(this._index);

      // followed by at least one digit
      if (cc < 48 || cc > 57) {
        throw this.error(`Unknown literal "${num}"`);
      }

      // and optionally more digits
      while (cc >= 48 && cc <= 57) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);
      }
    }

    return {
      type: 'num',
      val: num
    };
  }

  getAttributes() {
    const attrs = {};

    while (this._index < this._length) {
      const ch = this._source[this._index];

      if (ch !== '.') {
        break;
      }
      this._index++;

      const key = this.getIdentifier();

      this.getLineWS();

      this._index++;

      this.getLineWS();

      const val = this.getPattern();

      if (typeof val === 'string') {
        attrs[key] = val;
      } else {
        attrs[key] = {
          val
        };
      }

      this.getWS();
    }

    return attrs;
  }

  getTags() {
    const tags = [];

    while (this._index < this._length) {
      const ch = this._source[this._index];

      if (ch !== '#') {
        break;
      }
      this._index++;

      const symbol = this.getSymbol();

      tags.push(symbol.name);

      this.getWS();
    }

    return tags;
  }

  getVariants() {
    const variants = [];
    let index = 0;
    let defaultIndex;

    while (this._index < this._length) {
      const ch = this._source[this._index];

      if ((ch !== '[' || this._source[this._index + 1] === '[') &&
          ch !== '*') {
        break;
      }
      if (ch === '*') {
        this._index++;
        defaultIndex = index;
      }

      if (this._source[this._index] !== '[') {
        throw this.error('Expected "["');
      }

      this._index++;

      const key = this.getVariantKey();

      this.getLineWS();

      const variant = {
        key,
        val: this.getPattern()
      };
      variants[index++] = variant;

      this.getWS();
    }

    return [variants, defaultIndex];
  }

  // VariantKey may be a Keyword or Number
  getVariantKey() {
    const cc = this._source.charCodeAt(this._index);
    let literal;

    if ((cc >= 48 && cc <= 57) || cc === 45) {
      literal = this.getNumber();
    } else {
      literal = this.getSymbol();
    }

    if (this._source[this._index] !== ']') {
      throw this.error('Expected "]"');
    }

    this._index++;
    return literal;
  }

  getLiteral() {
    const cc = this._source.charCodeAt(this._index);
    if ((cc >= 48 && cc <= 57) || cc === 45) {
      return this.getNumber();
    } else if (cc === 34) { // "
      return this.getString();
    } else if (cc === 36) { // $
      this._index++;
      return {
        type: 'ext',
        name: this.getIdentifier()
      };
    }

    return {
      type: 'ref',
      name: this.getIdentifier()
    };
  }

  // At runtime, we don't care about comments so we just have
  // to parse them properly and skip their content.
  getComment() {
    let eol = this._source.indexOf('\n', this._index);

    while (eol !== -1 &&
      this._source[eol + 1] === '/' && this._source[eol + 2] === '/') {
      this._index = eol + 3;

      eol = this._source.indexOf('\n', this._index);

      if (eol === -1) {
        break;
      }
    }

    if (eol === -1) {
      this._index = this._length;
    } else {
      this._index = eol + 1;
    }
  }

  error(message) {
    return new SyntaxError(message);
  }

  _findNextEntryStart() {
    let start = this._index;

    while (true) {
      if (start === 0 || this._source[start - 1] === '\n') {
        const cc = this._source.charCodeAt(start);

        if ((cc >= 97 && cc <= 122) || // a-z
            (cc >= 65 && cc <= 90) ||  // A-Z
             cc === 95 || cc === 47 || cc === 91) {  // _/[
          break;
        }
      }

      start = this._source.indexOf('\n', start);

      if (start === -1) {
        break;
      }
      start++;
    }

    return start;
  }
}

function parse(string) {
  const parser = new RuntimeParser();
  return parser.getResource(string);
}

/* global Intl */

/**
 * The `FluentType` class is the base of Fluent's type system.
 *
 * Fluent types wrap JavaScript values and store additional configuration for
 * them, which can then be used in the `valueOf` method together with a proper
 * `Intl` formatter.
 */
class FluentType {

  /**
   * Create an `FluentType` instance.
   *
   * @param   {Any}    value - JavaScript value to wrap.
   * @param   {Object} opts  - Configuration.
   * @returns {FluentType}
   */
  constructor(value, opts) {
    this.value = value;
    this.opts = opts;
  }

  /**
   * Unwrap the instance of `FluentType`.
   *
   * Unwrapped values are suitable for use outside of the `MessageContext`.
   * This method can use `Intl` formatters memoized by the `MessageContext`
   * instance passed as an argument.
   *
   * @param   {MessageContext} [ctx]
   * @returns {string}
   */
  valueOf() {
    throw new Error('Subclasses of FluentType must implement valueOf.');
  }
}

class FluentNone extends FluentType {
  valueOf() {
    return this.value || '???';
  }
}

class FluentNumber extends FluentType {
  constructor(value, opts) {
    super(parseFloat(value), opts);
  }
  valueOf(ctx) {
    const nf = ctx._memoizeIntlObject(
      Intl.NumberFormat, this.opts
    );
    return nf.format(this.value);
  }
  match(ctx, other) {
    if (other instanceof FluentNumber) {
      return this.value === other.value;
    }
    return false;
  }
}

class FluentDateTime extends FluentType {
  constructor(value, opts) {
    super(new Date(value), opts);
  }
  valueOf(ctx) {
    const dtf = ctx._memoizeIntlObject(
      Intl.DateTimeFormat, this.opts
    );
    return dtf.format(this.value);
  }
}

class FluentSymbol extends FluentType {
  valueOf() {
    return this.value;
  }
  match(ctx, other) {
    if (other instanceof FluentSymbol) {
      return this.value === other.value;
    } else if (typeof other === 'string') {
      return this.value === other;
    } else if (other instanceof FluentNumber) {
      const pr = ctx._memoizeIntlObject(
        Intl.PluralRules, other.opts
      );
      return this.value === pr.select(other.value);
    } else if (Array.isArray(other)) {
      const values = other.map(symbol => symbol.value);
      return values.includes(this.value);
    }
    return false;
  }
}

/**
 * @overview
 *
 * The FTL resolver ships with a number of functions built-in.
 *
 * Each function take two arguments:
 *   - args - an array of positional args
 *   - opts - an object of key-value args
 *
 * Arguments to functions are guaranteed to already be instances of
 * `FluentType`.  Functions must return `FluentType` objects as well.
 */

const builtins = {
  'NUMBER': ([arg], opts) =>
    new FluentNumber(arg.value, merge(arg.opts, opts)),
  'DATETIME': ([arg], opts) =>
    new FluentDateTime(arg.value, merge(arg.opts, opts)),
};

function merge(argopts, opts) {
  return Object.assign({}, argopts, values(opts));
}

function values(opts) {
  const unwrapped = {};
  for (const name of Object.keys(opts)) {
    unwrapped[name] = opts[name].value;
  }
  return unwrapped;
}

/**
 * @overview
 *
 * The role of the Fluent resolver is to format a translation object to an
 * instance of `FluentType` or an array of instances.
 *
 * Translations can contain references to other messages or external arguments,
 * conditional logic in form of select expressions, traits which describe their
 * grammatical features, and can use Fluent builtins which make use of the
 * `Intl` formatters to format numbers, dates, lists and more into the
 * context's language.  See the documentation of the Fluent syntax for more
 * information.
 *
 * In case of errors the resolver will try to salvage as much of the
 * translation as possible.  In rare situations where the resolver didn't know
 * how to recover from an error it will return an instance of `FluentNone`.
 *
 * `MessageReference`, `VariantExpression`, `AttributeExpression` and
 * `SelectExpression` resolve to raw Runtime Entries objects and the result of
 * the resolution needs to be passed into `Type` to get their real value.
 * This is useful for composing expressions.  Consider:
 *
 *     brand-name[nominative]
 *
 * which is a `VariantExpression` with properties `id: MessageReference` and
 * `key: Keyword`.  If `MessageReference` was resolved eagerly, it would
 * instantly resolve to the value of the `brand-name` message.  Instead, we
 * want to get the message object and look for its `nominative` variant.
 *
 * All other expressions (except for `FunctionReference` which is only used in
 * `CallExpression`) resolve to an instance of `FluentType`.  The caller should
 * use the `valueOf` method to convert the instance to a native value.
 */

// Prevent expansion of too long placeables.
const MAX_PLACEABLE_LENGTH = 2500;

// Unicode bidi isolation characters.
const FSI = '\u2068';
const PDI = '\u2069';


/**
 * Helper for computing the total character length of a placeable.
 *
 * Used in Pattern.
 *
 * @private
 */
function PlaceableLength(env, parts) {
  const { ctx } = env;
  return parts.reduce(
    (sum, part) => sum + part.valueOf(ctx).length,
    0
  );
}


/**
 * Helper for choosing the default value from a set of members.
 *
 * Used in SelectExpressions and Type.
 *
 * @private
 */
function DefaultMember(env, members, def) {
  if (members[def]) {
    return members[def];
  }

  const { errors } = env;
  errors.push(new RangeError('No default'));
  return new FluentNone();
}


/**
 * Resolve a reference to a message to the message object.
 *
 * @private
 */
function MessageReference(env, {name}) {
  const { ctx, errors } = env;
  const message = ctx.messages.get(name);

  if (!message) {
    errors.push(new ReferenceError(`Unknown message: ${name}`));
    return new FluentNone(name);
  }

  return message;
}

/**
 * Resolve an array of tags.
 *
 * @private
 */
function Tags(env, {name}) {
  const { ctx, errors } = env;
  const message = ctx.messages.get(name);

  if (!message) {
    errors.push(new ReferenceError(`Unknown message: ${name}`));
    return new FluentNone(name);
  }

  if (!message.tags) {
    errors.push(new RangeError(`No tags in message "${name}"`));
    return new FluentNone(name);
  }

  return message.tags.map(
    tag => new FluentSymbol(tag)
  );
}


/**
 * Resolve a variant expression to the variant object.
 *
 * @private
 */
function VariantExpression(env, {id, key}) {
  const message = MessageReference(env, id);
  if (message instanceof FluentNone) {
    return message;
  }

  const { ctx, errors } = env;
  const keyword = Type(env, key);

  function isVariantList(node) {
    return Array.isArray(node) &&
      node[0].type === 'sel' &&
      node[0].exp === null;
  }

  if (isVariantList(message.val)) {
    // Match the specified key against keys of each variant, in order.
    for (const variant of message.val[0].vars) {
      const variantKey = Type(env, variant.key);
      if (keyword.match(ctx, variantKey)) {
        return variant;
      }
    }
  }

  errors.push(new ReferenceError(`Unknown variant: ${keyword.valueOf(ctx)}`));
  return Type(env, message);
}


/**
 * Resolve an attribute expression to the attribute object.
 *
 * @private
 */
function AttributeExpression(env, {id, name}) {
  const message = MessageReference(env, id);
  if (message instanceof FluentNone) {
    return message;
  }

  if (message.attrs) {
    // Match the specified name against keys of each attribute.
    for (const attrName in message.attrs) {
      if (name === attrName) {
        return message.attrs[name];
      }
    }
  }

  const { errors } = env;
  errors.push(new ReferenceError(`Unknown attribute: ${name}`));
  return Type(env, message);
}

/**
 * Resolve a select expression to the member object.
 *
 * @private
 */
function SelectExpression(env, {exp, vars, def}) {
  if (exp === null) {
    return DefaultMember(env, vars, def);
  }

  const selector = exp.type === 'ref'
    ? Tags(env, exp)
    : Type(env, exp);
  if (selector instanceof FluentNone) {
    return DefaultMember(env, vars, def);
  }

  // Match the selector against keys of each variant, in order.
  for (const variant of vars) {
    const key = Type(env, variant.key);
    const keyCanMatch =
      key instanceof FluentNumber || key instanceof FluentSymbol;

    if (!keyCanMatch) {
      continue;
    }

    const { ctx } = env;

    if (key.match(ctx, selector)) {
      return variant;
    }
  }

  return DefaultMember(env, vars, def);
}


/**
 * Resolve expression to a Fluent type.
 *
 * JavaScript strings are a special case.  Since they natively have the
 * `valueOf` method they can be used as if they were a Fluent type without
 * paying the cost of creating a instance of one.
 *
 * @param   {Object} expr
 * @returns {FluentType}
 * @private
 */
function Type(env, expr) {
  // A fast-path for strings which are the most common case, and for
  // `FluentNone` which doesn't require any additional logic.
  if (typeof expr === 'string' || expr instanceof FluentNone) {
    return expr;
  }

  // The Runtime AST (Entries) encodes patterns (complex strings with
  // placeables) as Arrays.
  if (Array.isArray(expr)) {
    return Pattern(env, expr);
  }


  switch (expr.type) {
    case 'sym':
      return new FluentSymbol(expr.name);
    case 'num':
      return new FluentNumber(expr.val);
    case 'ext':
      return ExternalArgument(env, expr);
    case 'fun':
      return FunctionReference(env, expr);
    case 'call':
      return CallExpression(env, expr);
    case 'ref': {
      const message = MessageReference(env, expr);
      return Type(env, message);
    }
    case 'attr': {
      const attr = AttributeExpression(env, expr);
      return Type(env, attr);
    }
    case 'var': {
      const variant = VariantExpression(env, expr);
      return Type(env, variant);
    }
    case 'sel': {
      const member = SelectExpression(env, expr);
      return Type(env, member);
    }
    case undefined: {
      // If it's a node with a value, resolve the value.
      if (expr.val !== undefined) {
        return Type(env, expr.val);
      }

      const { errors } = env;
      errors.push(new RangeError('No value'));
      return new FluentNone();
    }
    default:
      return new FluentNone();
  }
}

/**
 * Resolve a reference to an external argument.
 *
 * @private
 */
function ExternalArgument(env, {name}) {
  const { args, errors } = env;

  if (!args || !args.hasOwnProperty(name)) {
    errors.push(new ReferenceError(`Unknown external: ${name}`));
    return new FluentNone(name);
  }

  const arg = args[name];

  if (arg instanceof FluentType) {
    return arg;
  }

  // Convert the argument to a Fluent type.
  switch (typeof arg) {
    case 'string':
      return arg;
    case 'number':
      return new FluentNumber(arg);
    case 'object':
      if (arg instanceof Date) {
        return new FluentDateTime(arg);
      }
    default:
      errors.push(
        new TypeError(`Unsupported external type: ${name}, ${typeof arg}`)
      );
      return new FluentNone(name);
  }
}

/**
 * Resolve a reference to a function.
 *
 * @private
 */
function FunctionReference(env, {name}) {
  // Some functions are built-in.  Others may be provided by the runtime via
  // the `MessageContext` constructor.
  const { ctx: { functions }, errors } = env;
  const func = functions[name] || builtins[name];

  if (!func) {
    errors.push(new ReferenceError(`Unknown function: ${name}()`));
    return new FluentNone(`${name}()`);
  }

  if (typeof func !== 'function') {
    errors.push(new TypeError(`Function ${name}() is not callable`));
    return new FluentNone(`${name}()`);
  }

  return func;
}

/**
 * Resolve a call to a Function with positional and key-value arguments.
 *
 * @private
 */
function CallExpression(env, {fun, args}) {
  const callee = FunctionReference(env, fun);

  if (callee instanceof FluentNone) {
    return callee;
  }

  const posargs = [];
  const keyargs = [];

  for (const arg of args) {
    if (arg.type === 'narg') {
      keyargs[arg.name] = Type(env, arg.val);
    } else {
      posargs.push(Type(env, arg));
    }
  }

  // XXX functions should also report errors
  return callee(posargs, keyargs);
}

/**
 * Resolve a pattern (a complex string with placeables).
 *
 * @private
 */
function Pattern(env, ptn) {
  const { ctx, dirty, errors } = env;

  if (dirty.has(ptn)) {
    errors.push(new RangeError('Cyclic reference'));
    return new FluentNone();
  }

  // Tag the pattern as dirty for the purpose of the current resolution.
  dirty.add(ptn);
  const result = [];

  for (const elem of ptn) {
    if (typeof elem === 'string') {
      result.push(elem);
      continue;
    }

    const part = Type(env, elem);

    if (ctx.useIsolating) {
      result.push(FSI);
    }

    if (Array.isArray(part)) {
      const len = PlaceableLength(env, part);

      if (len > MAX_PLACEABLE_LENGTH) {
        errors.push(
          new RangeError(
            'Too many characters in placeable ' +
            `(${len}, max allowed is ${MAX_PLACEABLE_LENGTH})`
          )
        );
        result.push(new FluentNone());
      } else {
        result.push(...part);
      }
    } else {
      result.push(part);
    }

    if (ctx.useIsolating) {
      result.push(PDI);
    }
  }

  dirty.delete(ptn);
  return result;
}

/**
 * Format a translation into an `FluentType`.
 *
 * The return value must be unwrapped via `valueOf` by the caller.
 *
 * @param   {MessageContext} ctx
 * @param   {Object}         args
 * @param   {Object}         message
 * @param   {Array}          errors
 * @returns {FluentType}
 */
function resolve(ctx, args, message, errors = []) {
  const env = {
    ctx, args, errors, dirty: new WeakSet()
  };
  return Type(env, message);
}

/**
 * Message contexts are single-language stores of translations.  They are
 * responsible for parsing translation resources in the Fluent syntax and can
 * format translation units (entities) to strings.
 *
 * Always use `MessageContext.format` to retrieve translation units from
 * a context.  Translations can contain references to other entities or
 * external arguments, conditional logic in form of select expressions, traits
 * which describe their grammatical features, and can use Fluent builtins which
 * make use of the `Intl` formatters to format numbers, dates, lists and more
 * into the context's language.  See the documentation of the Fluent syntax for
 * more information.
 */
class MessageContext {

  /**
   * Create an instance of `MessageContext`.
   *
   * The `locales` argument is used to instantiate `Intl` formatters used by
   * translations.  The `options` object can be used to configure the context.
   *
   * Examples:
   *
   *     const ctx = new MessageContext(locales);
   *
   *     const ctx = new MessageContext(locales, { useIsolating: false });
   *
   *     const ctx = new MessageContext(locales, {
   *       useIsolating: true,
   *       functions: {
   *         NODE_ENV: () => process.env.NODE_ENV
   *       }
   *     });
   *
   * Available options:
   *
   *   - `functions` - an object of additional functions available to
   *                   translations as builtins.
   *
   *   - `useIsolating` - boolean specifying whether to use Unicode isolation
   *                    marks (FSI, PDI) for bidi interpolations.
   *
   * @param   {string|Array<string>} locales - Locale or locales of the context
   * @param   {Object} [options]
   * @returns {MessageContext}
   */
  constructor(locales, { functions = {}, useIsolating = true } = {}) {
    this.locales = Array.isArray(locales)
      ? locales : [locales];
    this.functions = functions;
    this.useIsolating = useIsolating;
    this.messages = new Map();
    this.intls = new WeakMap();
  }

  /**
   * Add a translation resource to the context.
   *
   * The translation resource must use the Fluent syntax.  It will be parsed by
   * the context and each translation unit (message) will be available in the
   * `messages` map by its identifier.
   *
   *     ctx.addMessages('foo = Foo');
   *     ctx.messages.get('foo');
   *
   *     // Returns a raw representation of the 'foo' message.
   *
   * Parsed entities should be formatted with the `format` method in case they
   * contain logic (references, select expressions etc.).
   *
   * @param   {string} source - Text resource with translations.
   * @returns {Array<Error>}
   */
  addMessages(source) {
    const [entries, errors] = parse(source);
    for (const id in entries) {
      this.messages.set(id, entries[id]);
    }

    return errors;
  }

  /**
   * Format a message to an array of `FluentTypes` or null.
   *
   * Format a raw `message` from the context's `messages` map into an array of
   * `FluentType` instances which may be used to build the final result.  It
   * may also return `null` if it has a null value.  `args` will be used to
   * resolve references to external arguments inside of the translation.
   *
   * See the documentation of {@link MessageContext#format} for more
   * information about error handling.
   *
   * In case of errors `format` will try to salvage as much of the translation
   * as possible and will still return a string.  For performance reasons, the
   * encountered errors are not returned but instead are appended to the
   * `errors` array passed as the third argument.
   *
   *     ctx.addMessages('hello = Hello, { $name }!');
   *     const hello = ctx.messages.get('hello');
   *     ctx.formatToParts(hello, { name: 'Jane' }, []);
   *     // → ['Hello, ', '\u2068', 'Jane', '\u2069']
   *
   * The returned parts need to be formatted via `valueOf` before they can be
   * used further.  This will ensure all values are correctly formatted
   * according to the `MessageContext`'s locale.
   *
   *     const parts = ctx.formatToParts(hello, { name: 'Jane' }, []);
   *     const str = parts.map(part => part.valueOf(ctx)).join('');
   *
   * @see MessageContext#format
   * @param   {Object | string}    message
   * @param   {Object | undefined} args
   * @param   {Array}              errors
   * @returns {?Array<FluentType>}
   */
  formatToParts(message, args, errors) {
    // optimize entities which are simple strings with no attributes
    if (typeof message === 'string') {
      return [message];
    }

    // optimize simple-string entities with attributes
    if (typeof message.val === 'string') {
      return [message.val];
    }

    // optimize entities with null values
    if (message.val === undefined) {
      return null;
    }

    const result = resolve(this, args, message, errors);

    return result instanceof FluentNone ? null : result;
  }

  /**
   * Format a message to a string or null.
   *
   * Format a raw `message` from the context's `messages` map into a string (or
   * a null if it has a null value).  `args` will be used to resolve references
   * to external arguments inside of the translation.
   *
   * In case of errors `format` will try to salvage as much of the translation
   * as possible and will still return a string.  For performance reasons, the
   * encountered errors are not returned but instead are appended to the
   * `errors` array passed as the third argument.
   *
   *     const errors = [];
   *     ctx.addMessages('hello = Hello, { $name }!');
   *     const hello = ctx.messages.get('hello');
   *     ctx.format(hello, { name: 'Jane' }, errors);
   *
   *     // Returns 'Hello, Jane!' and `errors` is empty.
   *
   *     ctx.format(hello, undefined, errors);
   *
   *     // Returns 'Hello, name!' and `errors` is now:
   *
   *     [<ReferenceError: Unknown external: name>]
   *
   * @param   {Object | string}    message
   * @param   {Object | undefined} args
   * @param   {Array}              errors
   * @returns {?string}
   */
  format(message, args, errors) {
    // optimize entities which are simple strings with no attributes
    if (typeof message === 'string') {
      return message;
    }

    // optimize simple-string entities with attributes
    if (typeof message.val === 'string') {
      return message.val;
    }

    // optimize entities with null values
    if (message.val === undefined) {
      return null;
    }

    const result = resolve(this, args, message, errors);

    if (result instanceof FluentNone) {
      return null;
    }

    return result.map(part => part.valueOf(this)).join('');
  }

  _memoizeIntlObject(ctor, opts) {
    const cache = this.intls.get(ctor) || {};
    const id = JSON.stringify(opts);

    if (!cache[id]) {
      cache[id] = new ctor(this.locales, opts);
      this.intls.set(ctor, cache);
    }

    return cache[id];
  }
}

this.EXPORTED_SYMBOLS = ['MessageContext'];

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyModuleGetter(Intl, "PluralRules",
  "resource://gre/modules/IntlPluralRules.jsm");

this.MessageContext = MessageContext;

