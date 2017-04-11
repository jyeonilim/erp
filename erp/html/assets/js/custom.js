$(document).ready(function() {

    var w = $(window).width();
    var h = $(window).height();

    $('.left-card').slimScroll({
        height: h-264,
        position: 'right',
        size: "5px",
        color: '#dcdcdc',
        wheelStep: 5
    });
    $('.right-card').slimScroll({
        height: h-313,
        position: 'right',
        size: "5px",
        color: '#dcdcdc',
        wheelStep: 5
    });
    $('.tab-left-card').slimScroll({
        height: h-330,
        position: 'right',
        size: "5px",
        color: '#dcdcdc',
        wheelStep: 5
    });
    $(window).resize(function(){
        var rh = $(window).height();
        // console.log(rh);
        $('.left-card').height(rh-264);
        $('.left-card').parent('.slimScrollDiv').height(rh-264);
        $('.right-card').height(rh-313);
        $('.right-card').parent('.slimScrollDiv').height(rh-313);
        $('.tab-left-card').height(rh-330);
        $('.tab-left-card').parent('.slimScrollDiv').height(rh-330);
    });

    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.btn-top');
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('fade-out');
        }
    });
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });


});