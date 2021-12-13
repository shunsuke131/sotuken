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

   

   //    4

$(function() {
   $('img.thumb4').mouseover(function(){
   // "_thumb"を削った画像ファイル名を取得
   var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
   
   // 画像入れ替え
   $('img.mainImage4').stop().fadeOut(300,
   function(){
   $('img.mainImage4').attr('src', selectedSrc);
   $('img.mainImage4').stop().fadeIn(300);
   }
   );
   // サムネイルの枠を変更
   $(this).css({"border":"2px solid #ff5a71"});
   });
   
   // マウスアウトでサムネイル枠もとに戻す
   $('img.thumb4').mouseout(function(){
   $(this).css({"border":""});
   });
  });


  //    5

$(function() {
   $('img.thumb5').mouseover(function(){
   // "_thumb"を削った画像ファイル名を取得
   var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
   
   // 画像入れ替え
   $('img.mainImage5').stop().fadeOut(300,
   function(){
   $('img.mainImage5').attr('src', selectedSrc);
   $('img.mainImage5').stop().fadeIn(300);
   }
   );
   // サムネイルの枠を変更
   $(this).css({"border":"2px solid #ff5a71"});
   });
   
   // マウスアウトでサムネイル枠もとに戻す
   $('img.thumb5').mouseout(function(){
   $(this).css({"border":""});
   });
  });

    //    6

$(function() {
   $('img.thumb6').mouseover(function(){
   // "_thumb"を削った画像ファイル名を取得
   var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
   
   // 画像入れ替え
   $('img.mainImage6').stop().fadeOut(300,
   function(){
   $('img.mainImage6').attr('src', selectedSrc);
   $('img.mainImage6').stop().fadeIn(300);
   }
   );
   // サムネイルの枠を変更
   $(this).css({"border":"2px solid #ff5a71"});
   });
   
   // マウスアウトでサムネイル枠もとに戻す
   $('img.thumb6').mouseout(function(){
   $(this).css({"border":""});
   });
  });


      //    7

$(function() {
   $('img.thumb7').mouseover(function(){
   // "_thumb"を削った画像ファイル名を取得
   var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
   
   // 画像入れ替え
   $('img.mainImage7').stop().fadeOut(300,
   function(){
   $('img.mainImage7').attr('src', selectedSrc);
   $('img.mainImage7').stop().fadeIn(300);
   }
   );
   // サムネイルの枠を変更
   $(this).css({"border":"2px solid #ff5a71"});
   });
   
   // マウスアウトでサムネイル枠もとに戻す
   $('img.thumb7').mouseout(function(){
   $(this).css({"border":""});
   });
  });


      //    8

$(function() {
   $('img.thumb8').mouseover(function(){
   // "_thumb"を削った画像ファイル名を取得
   var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
   
   // 画像入れ替え
   $('img.mainImage8').stop().fadeOut(300,
   function(){
   $('img.mainImage8').attr('src', selectedSrc);
   $('img.mainImage8').stop().fadeIn(300);
   }
   );
   // サムネイルの枠を変更
   $(this).css({"border":"2px solid #ff5a71"});
   });
   
   // マウスアウトでサムネイル枠もとに戻す
   $('img.thumb8').mouseout(function(){
   $(this).css({"border":""});
   });
  });

      //    9

$(function() {
   $('img.thumb9').mouseover(function(){
   // "_thumb"を削った画像ファイル名を取得
   var selectedSrc = $(this).attr('src').replace(/^(.+)_thumb(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
   
   // 画像入れ替え
   $('img.mainImage9').stop().fadeOut(300,
   function(){
   $('img.mainImage9').attr('src', selectedSrc);
   $('img.mainImage9').stop().fadeIn(300);
   }
   );
   // サムネイルの枠を変更
   $(this).css({"border":"2px solid #ff5a71"});
   });
   
   // マウスアウトでサムネイル枠もとに戻す
   $('img.thumb9').mouseout(function(){
   $(this).css({"border":""});
   });
  });

