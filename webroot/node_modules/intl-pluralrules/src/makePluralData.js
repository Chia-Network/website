const MakePlural = require('make-plural/make-plural').load(
                       require('make-plural/data/plurals.json'),
                       require('make-plural/data/ordinals.json')
                   );

const commonPlurals = [
`function(n) {
  return 'other';
}`,
`function(n) {
  return (n == 1) ? 'one' : 'other';
}`,
`function(n) {
  return ((n == 0
          || n == 1)) ? 'one' : 'other';
}`,
`function(n) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
}`
];

function pluralFuncStr(fn) {
    let str = fn.toString();
    commonPlurals.forEach((p, i) => {
        if (str === p) str = `cp[${i}]`;
    });
    return str;
}

function pluralFunctions(opt) {
    const style = opt && !opt.cardinals ? 'ordinal' : 'cardinal';
    let languages = [];
    for (let lc in MakePlural.rules[style]) {
        const key = /^[A-Z_$][0-9A-Z_$]*$/i.test(lc) ? lc : JSON.stringify(lc),
              mp = new MakePlural(lc, opt).test();
        languages.push(key + ': ' + pluralFuncStr(mp));
    }
    return languages;
}

const cardinalData = pluralFunctions({ cardinals: true, ordinals: false }),
       ordinalData = pluralFunctions({ cardinals: false, ordinals: true });

function fmt(lines, indent) {
    return lines.join(',\n').replace(/^/gm, indent);
}

console.log(

`const cp = [
${fmt(commonPlurals, '  ')}
];

export default {
  cardinal: {
${fmt(cardinalData, '    ')}
  },
  ordinal: {
${fmt(ordinalData, '    ')}
  }
}`

);
