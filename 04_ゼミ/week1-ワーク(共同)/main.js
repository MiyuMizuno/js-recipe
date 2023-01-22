// 問題文
//ボタン3つ
//FBテキスト

//要素の宣言

const pythonButton = document.getElementById("button1")
const swiftButton = document.getElementById("button2")
const javaButton = document.getElementById("button3")
const fbtext = document.getElementById("fbtext")

//押されたボタンとテキストのindex番号を対応させる
const button = [pythonButton, swiftButton, javaButton]
const fbTexts = ["外れ！", "外れ！", "正解！！"]

//ボタンを押したときの処理:クリックされたらFB変える
//ボタン1を押したらテキスト1を表示。ボタン2だとテキスト2
//つまり、n番目のボタンが押されたとき、n番目のテキストを表示
for (let n = 0; n < button.length; n++) {
  button[n].onclick = function () {
    fbtext.textContent = fbTexts[n]
  }
}
