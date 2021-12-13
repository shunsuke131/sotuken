// 時間の指定
var timer = 3000;

// スライドする要素を取得
var imgs = document.querySelectorAll('#album img');

// 最初の画像を表示
imgs[0].classList.add('show');

// 画像の番号
var imgNum = 0;
function showImg () {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('show');
  }
  if (imgNum >= imgs.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  imgs[imgNum].classList.add('show');
  showImgTimer();
}
function showImgTimer () {
  setTimeout(showImg, timer);
}
showImgTimer()