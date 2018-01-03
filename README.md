This is the web site at <https://chia.network/>. Pull requests accepted!

If you have ideas for the FAQ, check out <https://github.com/Chia-Network/website/tree/master/webroot/faq>

You can see this web site locally with python 2 as follows:

````bash
    $ cd webroot
    $ python -m SimpleHTTPServer
````

or with python 3:

````bash
    $ cd webroot
    $ python3 -m http.server
````

Then browse to http://127.0.0.1:8000/

# A note to contributors

The [Content Secutiry Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) used on this site requires all script and CSS to be external to the html files. This means that inline styles and embedded `script` elements will be blocked.

# Translations

This site uses [l20n.js](https://http://l20n.org/) v5.0 to translate static html content. Please take a moment to familarize yourself
with its rules and syntax before adding content or translations.

## Guidelines for new content in existing files

- All text section elements must include the `data-l10n-id="text-id"` attribute:

````html
    <span data-l10n-id="new-text-section">This is a new section of text</span>
````

- Before adding new translation entries, make sure one does not already exist by checking the [app.en-US.ftl](webroot/locales/app.en-US.ftl)

- Add new text entries and english translations to `app.en-US.ftl`

- Add the same entries to the remaining [translation files](webroot/locales/)

## Guidelines for new html files

- All html files must include the following in the `head` section:

````html
    <meta name="defaultLanguage" content="en-US">
    <meta name="availableLanguages" content="en-US, fr, ja, nl">
    <link rel="localization" href="./locales/app.{locale}.ftl">
    <script defer src="./js/l20n.min.js"></script>
````

## Guidelines for adding languages

### For html

- Add the two character locale code to the following meta element in all existing html files

````html
    <meta name="availableLanguages" content="en-US, fr, ja, nl">
````

- Add the translated name of the langauge to the dictionary at the top of `locales.js`

````javascript
var names = {
   "en-US": "English",
   "fr": "Français",
   "ja": "日本語",
   "nl": "Nederlands"
};
````

- Copy `locales/app.en-US.ftl` and rename it with the locale code being added.
- Translate away!

### For the FAQ

- Translations of the FAQ are kept in markdown, and don't use l20n
- Copy [faq.md](/webroot/faq/faq.md) to the [translated markdown files](webroot/faq/locales/) folder, changing its name to `faq.<2 letter locale code>.md`
- Translate away!