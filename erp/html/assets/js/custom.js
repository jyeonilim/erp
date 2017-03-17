$(document).ready(function() {

    var w = $(window).width();
    var h = $(window).height();

    // $(window).resize(function() {
    //     var rw = $(window).width();
    //     if (rw < 767) {
    //         $(".page-title-box").css({
    //             'left': 20
    //         });
    //     }
    // });


    $('.customer-list').slimScroll({
        height: h-330,
        position: 'right',
        size: "5px",
        color: '#dcdcdc',
        wheelStep: 5
    });
    $('.reservation-receipt').slimScroll({
        height: h-420,
        position: 'right',
        size: "5px",
        color: '#dcdcdc',
        wheelStep: 5
    });
    $(window).resize(function(){
        var rh = $(window).height();
        // console.log(rh);
        $('.customer-list').height(rh-330);
        $('.customer-list').parent('.slimScrollDiv').height(rh-330);
        $('.reservation-receipt').height(rh-420);
        $('.reservation-receipt').parent('.slimScrollDiv').height(rh-420);
    });


});