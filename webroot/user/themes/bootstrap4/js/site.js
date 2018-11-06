var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

jQuery(document).ready(function($){
    // Smooth scroll to start
    $('#to-start').click(function(){
        var start_y = $('.main-content').position().top;
        var header_offset = 0;
        window.scroll({ top: start_y - header_offset, left: 0, behavior: 'smooth' });
        return false;
    });
});
