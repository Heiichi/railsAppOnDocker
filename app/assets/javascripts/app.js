var ready;
ready = function() {

  var btn = document.getElementById('btn');
  var content = document.getElementById('content');
  var elem = document.getElementById("hoge");

  //音声認識APIの使用
  var speech = new webkitSpeechRecognition();

  //言語を日本語に設定
  speech.lang = "ja";

  btn.addEventListener( 'click' , function() {

    // ➀ボタンをクリックした時の処理
    speech.start();

  } );

  speech.addEventListener( 'result' , function( e ) {

    // 認識された「言葉」を、変数「text」に格納
    var text = e.results[0][0].transcript;

    // 認識された「言葉(text)」を、表示用のdivタグに代入する
    if( text == "ビデオ" ) getVideo();

  } );

  function getVideo(){
    var URL = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vcTELCKq7bo" frameborder="0" allowfullscreen></iframe>'

    content.innerHTML = URL;
  };

};

$(document).ready(ready);
$(document).on('page:load', ready);
