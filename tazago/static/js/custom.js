$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors: ['reservation', 'serviceInfo', 'customerService'],
        menu: '#menu-page',
        scrollingSpeed: 500
    });


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
    // 예약하기 : 장소선택 - 지역선택 탭
    $('.tab-pane:first').show();
    $('.tab').click(function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).fadeIn();
    });
    //예약하기 : 장소선택 - 지점선택 탭
    $('.select-place-seoul li:first .content-place').show();
    $('.select-place-jeju li:first .content-place').show();
    $('.select-place-busan li:first .content-place').show();
    $(".content-select-place input[name=place-seoul]").change(function () {
        $(".select-place-seoul .content-place").hide();
        // console.log($(this));
        $("."+$(this).val()).show();
    });
    $(".content-select-place input[name=place-jeju]").change(function () {
        $(".select-place-jeju .content-place").hide();
        $("."+$(this).val()).show();
    });
    $(".content-select-place input[name=place-busan]").change(function () {
        $(".select-place-busan .content-place").hide();
        $("."+$(this).val()).show();
    });

    //예약하기 : 일정선택 - 날짜선택 레이어
    $('.text-date').on('click', function() {
        var display = $(this).siblings('.datepicker').css('display');
        if(display == 'none') {
            $('.select-datetime').children('.select-date,.select-time').removeClass('active').children('.datepicker,.timepicker').hide();
            $(this).parent().addClass('active').children('.datepicker').show();
        } else {
            $(this).parent().removeClass('active').children('.datepicker').hide();
        }
    });
    //예약하기 : 일정선택 - 시간선택 레이어
    // });
    $('.text-time').on('click', function() {
        var display = $(this).siblings('.timepicker').css('display');
        if(display == 'none') {
            $('.select-datetime').children('.select-date,.select-time').removeClass('active').children('.datepicker,.timepicker').hide();
            $(this).parent().addClass('active').children('.timepicker').show();
        } else {
            $(this).parent().removeClass('active').children('.timepicker').hide();
        }
    });

});

// Select Box
function selectboxEvent(target) {
    var $this = $(target),
        str = $this.val();
    $this.parent().children('.selectbox-value').text(str);
}