$(document).ready(function() {

    $('.btn-menu-close').on('click',function () {
        $('.megamenu').hide();
        $('body').removeClass('scrollFixed');
    });

    $(".service-info").slick();

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
    $('.select-place').on('click',function () {
        var hasActive = $(this).parent('li').hasClass('active');
        if(hasActive == true) {
            $(this).parent('li').removeClass('active');
            $('.select-place-picker').hide();
        } else {
            $(this).parent('li').addClass('active');
            $('.select-place-picker').show();
        }
    });
    // 예약하기 : 장소선택 - 지점선택 탭
    $('.select-place-seoul li:first .content-place').show();
    $('.select-place-jeju li:first .content-place').show();
    $('.select-place-busan li:first .content-place').show();
    $('.content-select-place input[name=place-seoul]').change(function () {
        $('.select-place-seoul .content-place').hide();
        // console.log($(this));
        $('.'+$(this).val()).show();
    });
    $('.content-select-place input[name=place-jeju]').change(function () {
        $('.select-place-jeju .content-place').hide();
        $('.'+$(this).val()).show();
    });
    $('.content-select-place input[name=place-busan]').change(function () {
        $('.select-place-busan .content-place').hide();
        $('.'+$(this).val()).show();
    });
    // 예약하기 : 일정선택 - 시간선택 레이어
    $('.text-time').on('click', function() {
        var display = $(this).siblings('.timepicker').css('display');
        if(display == 'none') {
            $('.select-datetime').children('.select-date,.select-time').removeClass('active').children('.datepicker,.timepicker').hide();
            $(this).parent().addClass('active').children('.timepicker').show();
        } else {
            $(this).parent().removeClass('active').children('.timepicker').hide();
        }
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