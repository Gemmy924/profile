/*
下スクロールでヘッダーフッターを隠し，
上スクロールで出現させる．
モバイルファーストが基本なため，
画面領域を有効活用したい場合に有効
*/

$(function(){

    let start_position = 0,     //初期位置０
        window_position,
        $window = $(window),
        $nav = $('nav'),
        $footer = $('footer');

    // スクロールイベントを設定
    $window.on( 'scroll' , function(){
        // スクロール量の取得
        window_position = $(this).scrollTop();

        // スクロール量が初期位置より小さければ，
        // 上にスクロールしているのでヘッダーフッターを出現させる
        if (window_position <= start_position) {
            $nav.css('top','0');
            $footer.css('bottom','0');
        } else {
            $nav.css('top','-70px');
            $footer.css('bottom','-70px');
        }
        // 現在の位置を更新する
        start_position = window_position;
        
    });
    // 中途半端なところでロードされても良いようにスクロールイベントを発生させる
    $window.trigger('scroll');

});


const before = $('.text');
const text = before.text();
const textArray = text.split('');

let after = '';
$.each(textArray,function(index,val){
  after += "<span>" + val + "</span>";
});  

before.html(after);

const textcnt = textArray.length;
const circleR = ($('.circle').height()) / 2;
const fontH = ($('.inner').height());
const dist = circleR - fontH;

$('span').each(function(index) {
  const num = index + 1;
  const radX = Math.sin(360 / textcnt * num * (Math.PI / 180));
  const radY = Math.sin((90 - (360 / textcnt * num)) * (Math.PI / 180));
  $(this).css('transform', 'translate(' + dist * radX + 'px, ' + -(dist * radY) + 'px) rotate(' + 360 / textcnt * num + 'deg)');
});