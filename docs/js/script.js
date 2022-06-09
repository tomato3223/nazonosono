// ロード画面
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      // 2回目以降アクセス時
      $(".load").addClass('visited'); // 非表示
    } else {
      // 初回アクセス時
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".progress__bar__now").css("transition",".6s linear");
      $(".progress__bar__now").width("100%");
      setTimeout(function () {
        // 幕を閉じて開く
        $(".maku__left, .maku__right").addClass('move');
      }, 1000);
      setTimeout(function () {
        // プログレスバーを非表示にする
        $(".progress").addClass('visited');
      }, 2200);
      setTimeout(function () {
        // ロード画面を非表示にする
        $(".load").addClass('visited');
      }, 4000);
    }
  }
  webStorage();
});

// ハンバーガーメニュー
$(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".hamburgerMenu").addClass("active");
        } else {
            $(".hamburgerMenu").removeClass("active");
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
