// depends on jquery, l20n and js.cookie

var names = {
   "en-US": "English",
   "fr": "Français",
   "ja": "日本語",
   "nl": "Nederlands",
   "de": "Deutsch",
   "es": "Español"
};

// this creates the list of manual language selection links at the bottom of each page
$.each($('meta[name=availableLanguages]').attr("content").split(','), function(key, value) {
    var locale = value.trim();

    var a = document.createElement("a");
    a.classList.add("langSwitch");
    a.href = "#";
    a.text = names[locale];
    a.setAttribute("locale", locale);

    $('#lang-box').append(a).append(" ");
});

$('.langSwitch').click(function() {
    changeLocale($(this).attr("locale"));
});

changeLocale(Cookies.get("locale"));

function changeLocale(locale) {
    if (locale !== undefined) {
        try {
            document.l10n.requestLanguages([locale]);
            Cookies.set("locale", locale);
        }
        catch (e) {
            Cookies.remove('locale');
        }
    }
}
