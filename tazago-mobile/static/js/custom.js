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


    // 예약하기 - 업그레이드 레이어
    $('.btn-upgrade').on('click',function () {
        $(this).addClass('on');
        $('.modal.upgrade').show();
    });
    $('.modal.upgrade .btn-modal-close').on('click',function () {
        $('.btn-upgrade').removeClass('on');
        $(this).parent().hide();
    });

    $('#coupon').selectmenu();
    $('.ui-selectmenu-menu').insertAfter('.footer');

    var h = $(window).height();
    $('.detail-view .image-area').height(h);

    // 차량검색 - 일정변경 레이어
    $('.btn-change-schedule').on('click',function () {
        $(this).addClass('on');
        $('.change-schedule').show();
        $('body').addClass('scrollFixed');
    });
    $('.change-schedule .btn-close').on('click',function () {
        $('.btn-change-schedule').removeClass('on');
        $(this).parent().hide();
        $('body').removeClass('scrollFixed');
    });

    // 로그인 - 아이디/패스워드 찾기
    $('.find-id').on('click',function () {
        modalOpen('.forgot');
        $('.tab').removeClass('active');
        $('.tab-pane').hide();
        $('.tab:first').addClass('active');
        $('.tab-pane:first').show();
    });
    $('.find-password').on('click',function () {
        modalOpen('.forgot');
        $('.tab').removeClass('active');
        $('.tab-pane').hide();
        $('.tab:last').addClass('active');
        $('.tab-pane:last').show();
    });

    // 자주하는 질문, 공지사항
    $(".board-title").on("click", function() {
        $(this).siblings().removeClass("open").next().slideUp();
        $(this).toggleClass("open").next().slideToggle();
        $(this).parent().siblings().children().removeClass("open").next().slideUp();
        return false;
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
}
function modalClose(modal) {
    var $this = $(modal);
    $this.removeClass('modal-backdrop').hide();
    $("html").removeClass("scroll-lock");
}