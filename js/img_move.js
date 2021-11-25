$(function() {
    $('img.thumb').mouseover(function(){
    // "_thumb"を削った画像ファイル名を取得
    var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
    
    // 画像入れ替え
    $('img.mainImage').stop().fadeOut(300,
    function(){
    $('img.mainImage').attr('src', selectedSrc);
    $('img.mainImage').stop().fadeIn(300);
    }
    );
    // サムネイルの枠を変更
    $(this).css({"border":"2px solid #ff5a71"});
    });
    
    // マウスアウトでサムネイル枠もとに戻す
    $('img.thumb').mouseout(function(){
    $(this).css({"border":""});
    });
   });



// 2
   $(function() {
    $('img.thumb2').mouseover(function(){
    // "_thumb"を削った画像ファイル名を取得
    var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
    
    // 画像入れ替え
    $('img.mainImage2').stop().fadeOut(300,
    function(){
    $('img.mainImage2').attr('src', selectedSrc);
    $('img.mainImage2').stop().fadeIn(300);
    }
    );
    // サムネイルの枠を変更
    $(this).css({"border":"2px solid #ff5a71"});
    });
    
    // マウスアウトでサムネイル枠もとに戻す
    $('img.thumb2').mouseout(function(){
    $(this).css({"border":""});
    });
   });

//    3

$(function() {
    $('img.thumb3').mouseover(function(){
    // "_thumb"を削った画像ファイル名を取得
    var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
    
    // 画像入れ替え
    $('img.mainImage3').stop().fadeOut(300,
    function(){
    $('img.mainImage3').attr('src', selectedSrc);
    $('img.mainImage3').stop().fadeIn(300);
    }
    );
    // サムネイルの枠を変更
    $(this).css({"border":"2px solid #ff5a71"});
    });
    
    // マウスアウトでサムネイル枠もとに戻す
    $('img.thumb3').mouseout(function(){
    $(this).css({"border":""});
    });
   });

   
