//ボタンを押すと、表示されている数字が１増えます。
const button = document.getElementById("plus-button")
const text = document.getElementById("display")
let count = 0
button.onclick = function () {
  //変数に1を代入
  count += 1
  text.textContent = count
}
