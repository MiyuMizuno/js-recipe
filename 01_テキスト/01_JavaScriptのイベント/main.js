//ボタンをクリックしたときにアラートを出す
//①イベントが発生する要素を取得
const button = document.getElementById("button")
//① 入力
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

//②関数を宣言
const alertMessage = function () {
  alert("クリックしたね")
}

//③クリックしたら実行
button.onclick = alertMessage

//入力されたら”Hello”
const sayHello = function () {
  console.log("Hello")
}

//実行
inputText.oninput = sayHello
inputDate.oninput = sayHello

//キーが押されたときの関数
const Key = function (e) {
  console.log(e.Key)
}
inputText.onkeydown = Key
