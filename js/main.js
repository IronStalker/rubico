$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['',''],
        items:1
    });

    $('a.scroll-to').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });

    $('.animation-wrap').one('inview', function (event, isInView) {
        if (isInView) {
            $('.rhombus-animate').addClass('animation-run');
            $('.progress').addClass('animation-run');
        }
    });
});