import pluralData from '../pluralData.js';

function isStructurallyValidLanguageTag(locale) {
    // does not check for duplicate subtags
    return locale.split('-').every(subtag => /[a-z0-9]+/i.test(subtag));
}

function canonicalizeLocaleList(locales) {
    if (!locales) return [];
    if (!Array.isArray(locales)) locales = [ locales ];
    return locales.map(tag => {
        // Requiring tag to be a String or Object means that the Number value
        // NaN will not be interpreted as the language tag "nan", which stands
        // for Min Nan Chinese.
        switch (typeof tag) {
            case 'string': break;
            case 'object': tag = tag.toString(); break;
            default: throw new TypeError('Locales should be strings, ' + JSON.stringify(tag) + " isn't.");
        }
        if (!isStructurallyValidLanguageTag(tag)) {
            throw new RangeError('The locale ' + JSON.stringify(tag) + ' is not a structurally valid BCP 47 language tag.');
        }
        return tag;
    }).reduce((seen, tag) => {
        if (seen.indexOf(tag) < 0) seen.push(tag);
        return seen;
    }, []);
}

function defaultLocale() {
    return (typeof window !== 'undefined') && window.navigator && (window.navigator.userLanguage || window.navigator.language) || 'en-US';
}

function findLocale(locales, locale) {
    do {
        if (locales[locale]) return locale;
        locale = locale.replace(/-?[^-]*$/, '');
    } while (locale);
    return null;
}

function resolveLocale(availableLocales, requestedLocales) {
    for (let locale of requestedLocales) {
        const availableLocale = findLocale(availableLocales, locale);
        if (availableLocale) return availableLocale;
    }
    return findLocale(availableLocales, defaultLocale());
}

function getStyle({ style }) {
    if (!style) return 'cardinal';
    if (['cardinal', 'ordinal'].indexOf(style) < 0) {
        throw new RangeError('Not a valid plural syle: ' + JSON.stringify(style));
    }
    return style;
}

export default class PluralRules {
    constructor(locales, options = {}) {
        // ignores options.localeMatcher
        const requestedLocales = canonicalizeLocaleList(locales);
        this.style = getStyle(options);
        this.locale = resolveLocale(pluralData[this.style], requestedLocales);
        this.select = pluralData[this.style][this.locale];
    }

    static supportedLocalesOf(locales, options = {}) {
        // ignores options.localeMatcher
        const requestedLocales = canonicalizeLocaleList(locales);
        const style = getStyle(options);
        return requestedLocales.filter(locale => findLocale(pluralData[style], locale));
    }

    resolvedOptions() {
        return { locale: this.locale, style: this.style };
    }
}

/*global ClobberIntlPluralRules:false */

if (typeof Intl === 'undefined') {
    if (typeof global !== 'undefined') {
        global.Intl = { PluralRules };
    } else if (typeof window !== 'undefined') {
        window.Intl = { PluralRules };
    } else {
        this.Intl = { PluralRules };
    }
} else if (!Intl.PluralRules || (typeof ClobberIntlPluralRules !== 'undefined' && ClobberIntlPluralRules)) {
    Intl.PluralRules = PluralRules;
} else if (typeof console !== 'undefined') {
    console.warn('Intl.PluralRules already exists, and has NOT been replaced by this polyfill');
    console.log('To force, set a global ClobberIntlPluralRules = true');
}
