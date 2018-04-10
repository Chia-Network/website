// depends on jquery, and showdown.js

// not all browsers support navigator.languages - if not just use the browser render language
if (typeof navigator !== 'undefined' && navigator.languages === undefined) {
    navigator.languages = [navigator.language];
}

// when browser language changes, reload the faq
$(window).bind("languagechange", function() {
    loadFaq();
});

loadFaq();

function loadFaq() {
    var locale = Cookies.get("locale") || getBrowserLocale();
    
    // first look for a translated faq
    if(locale == 'en')  {
        $.get('faq.md', function(md) {
            $('#markdown-container').html(new showdown.Converter().makeHtml(md));  
        });
    }   else    {
        $.get('./locales/faq.' + locale + '.md', function(md) {
            $('#markdown-container').html(new showdown.Converter().makeHtml(md));  
        }).fail(function() { // if no translation - fail back
            $.get('faq.md', function(md) {
                $('#markdown-container').html(new showdown.Converter().makeHtml(md));  
            });
        });
    }
}        

function getBrowserLocale()
{
    if (typeof navigator !== 'undefined' && navigator.languages !== undefined) {
        // the first lanaguage in the list is the user's preference
        var userLang = navigator.languages[0];
        // if(userLang == undefined)   return "en";
        var lang;
        try {
            lang = userLang.split('-')[0];
        } catch (error) {
            lang = 'en';
        }
        return lang;
    }
    return "en";
}