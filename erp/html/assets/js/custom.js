$(document).ready(function() {

    var w = $(window).width();
    var h = $(window).height();

    $('.customer-list').slimScroll({
        height: h-264,
        position: 'right',
        size: "5px",
        color: '#dcdcdc',
        wheelStep: 5
    });
    $('.reservation-receipt').slimScroll({
        height: h-318,
        position: 'right',
        size: "5px",
        color: '#dcdcdc',
        wheelStep: 5
    });
    $(window).resize(function(){
        var rh = $(window).height();
        // console.log(rh);
        $('.customer-list').height(rh-264);
        $('.customer-list').parent('.slimScrollDiv').height(rh-264);
        $('.reservation-receipt').height(rh-318);
        $('.reservation-receipt').parent('.slimScrollDiv').height(rh-318);
    });


});