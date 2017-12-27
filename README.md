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

# Translations

This site uses [l20n.js]([https://http://l20n.org/) v5.0 to translate static html content. Please take a moment to familarize yourself
with its rules and syntax before adding content or translations.

## Guidelines for new content in existing files

- All text section elements must include the `data-l10n-id="text-id"` attribute:

        `<span data-l10n-id="new-text-section">This is a new section of text</span>`

- Before adding new translation entries, make sure one does not already exist by checking the [app.en-US.ftl](website/locales/app.en-US.ftl)

- Add new text entries and english translations to `app.en-US.ftl'

- Add the same entries to the remaining [translation files](website/locales/)

## Guidelines for new html files

- All html files must include the following in the `head` section:

````html
    <meta name="defaultLanguage" content="en-US">
    <meta name="availableLanguages" content="en-US, fr, ja">
    <link rel="localization" href="./locales/app.{locale}.ftl">
    <script defer src="./js/l20n.min.js"></script>
````