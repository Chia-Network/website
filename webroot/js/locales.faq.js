// depends on jquery, and showdown.js

// not all browsers support navigator.languages - if not just use the browser render language
if (typeof navigator !== 'undefined' && navigator.languages === undefined) {
    if (navigator.language === undefined) {
        navigator.languages = ['en'];
    }
    else {
        navigator.languages = [navigator.language];
    }
}

// when browser language changes, reload the faq
$(window).bind("languagechange", function() {
    loadFaq();
});

loadFaq();

function loadFaq() {
    var locale = Cookies.get("locale") || navigator.languages[0] || 'en';

    var getAndTransform = function(file, fallback) {
        $.get(file, function(md) {
            $('#markdown-container').html(new showdown.Converter().makeHtml(md));
        })
        .fail(fallback);
    };

    if (locale.startsWith('en')) {
        getAndTransform('faq.md', function(){});
    }
    else {
        // first look for an exact match to the user's preferred language
        getAndTransform('./locales/faq.' + locale + '.md', function() {
            // fallback to one that matches just the language code
            getAndTransform('./locales/faq.' + locale.split('-')[0] + '.md', function () {
                // and if all else fails just go back to the english one
                getAndTransform('faq.md', function(){});
            });
        });
    }
}