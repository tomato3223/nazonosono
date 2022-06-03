// ハンバーガーメニュー
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.hamburgerMenu').addClass('active');
        } else {
            $('.hamburgerMenu').removeClass('active');
        }
    });
});

// アドレスバーの高さを除いたサイズを取得
$(function () {
  $('.hero').height($(window).innerHeight());
});
$(window).resize(function () {
  $('.hero').height($(window).innerHeight());
});
