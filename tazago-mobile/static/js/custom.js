$(document).ready(function() {

    // Mobile Side Bar Menu
    $(".btn-menu").click(function(e) {
        e.preventDefault();
        $("html").addClass("menu-open");
    });
    $(".menu-close, .menu-backdrop").on("click", function() {
        $("html").removeClass("menu-open");
    });

    $(".service-info").slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1
    });

    // Tab
    $('.tab-pane:first').show();
    $('.tab').click(function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();
    });


    // 메인
    // 예약하기 : 장소선택 - 레이어
    $('.select-place .form-control').on('click',function () {
        var hasActive = $(this).parents('.select-place').hasClass('active');
        if(hasActive == true) {
            $(this).parents('.select-place').removeClass('active');
            $(this).parent().siblings('.place-picker').hide();
        } else {
            $(this).parents('.select-place').addClass('active');
            $(this).parent().siblings('.place-picker').show();
        }
    });
    // 예약하기 : 장소선택 - 지점선택 탭
    $('#branch-seoul1').show();
    $('.select-place.branch .place-picker input[name=select-place]').change(function () {
        $('.content-place').hide();
        // console.log($(this));
        $('#'+$(this).val()).show();
    });


    // 결제수단 선택 - 할인수단
    $('.discount-methods input[name=discount-option]').change(function () {
        $('.discount-option').hide();
        // console.log($(this));
        $('.'+$(this).val()).show();
    });


    // 차량검색 - 일정변경 레이어
    $('.btn-change-schedule').on('click',function () {
        $(this).toggleClass('on');
        $('.change-schedule').slideToggle();
    });

    // 예약하기 툴팁
    $('.reservation-option .help-point').on("click",function() {
        $(this).siblings('.tooltip').toggle();
    });


    // 자주하는 질문, 공지사항
    $(".board-title").on("click", function() {
        $(this).siblings().removeClass("open").next().slideUp();
        $(this).toggleClass("open").next().slideToggle();
        $(this).parent().siblings().children().removeClass("open").next().slideUp();
        return false;
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

// Select Box
function selectboxEvent(target) {
    var $this = $(target),
        str = $this.val();
    $this.parent().children('.selectbox-value').text(str);
}
// Select Box - 시간선택
function selectTime(target) {
    var $this = $(target),
        str = $this.val(),
        arr = str.split(' ');
    $this.parent().children('.selectbox-value').html('<em>'+arr[0]+'</em>'+arr[1]);
}

// Modal
function modalOpen(modal) {
    var $this = $(modal);
    $this.addClass('modal-backdrop').show();
    $("html").addClass("scroll-lock");
    var hasScroll = $this.children('.modal-content').hasClass('is-scroll');
    if(hasScroll == false) {
        var modalH = $this.children('.modal-content').height();
        $this.children('.modal-content').css({
            'height': modalH,
            'bottom': 0
        });
    }
}
function modalClose(modal) {
    var $this = $(modal);
    $this.removeClass('modal-backdrop').hide();
    $("html").removeClass("scroll-lock");
}