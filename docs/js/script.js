// ハンバーガーメニュー
$(function() {
    addClass('.hamburger', '.hamburgerMenu', 'active');
    addClass('.hamburger', 'body', 'fixed');

    function addClass(clickedElm, addedElm, className){
      $(clickedElm).click(function() {
          $(this).toggleClass(className);
          if ($(this).hasClass(className)) {
              $(addedElm).addClass(className);
          } else {
              $(addedElm).removeClass(className);
          }
      });
    }
});

// アドレスバーの高さを除いたサイズを取得
$(function () {
  $('.hero').height($(window).innerHeight());
});
$(window).resize(function () {
  $('.hero').height($(window).innerHeight());
});

// スクロール
$(window).on('load resize', function() {
  //ウィンドウの高さを取得する
  var targetY = $(window).innerHeight();
  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.hero__scroll').on('click', function() {
    $("html, body").stop().animate({
      scrollTop: targetY
    }, 500, 'swing');
    return false;
  });
});
