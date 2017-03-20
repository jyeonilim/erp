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


});