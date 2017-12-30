// depends on jquery, l20n and js.cookie


changeLocale(Cookies.get("locale"));


$('.langSwitch').click(function() {
    changeLocale($(this).attr("locale"));
});

function changeLocale(locale) {
    if (locale === undefined) return;

    try {
        document.l10n.requestLanguages([locale]);
        Cookies.set("locale", locale);
    }
    catch (e)
    {
        Cookies.remove('locale');
    }
}