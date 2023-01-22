//電卓
const text = document.getElementById("display")
const button1 = document.getElementById("puls")
const button2 = document.getElementById("minus")
const button3 = document.getElementById("kakeru")
const button4 = document.getElementById("waru")
const button6 = document.getElementById("clear")
//number=入力された数値
const number = document.getElementById("input-text")
//displayに表示する数値
let count = 0
//入力された数値を格納する変数
let inputNumber = 0

number.oninput = function (e) {
  console.log(e.target.value)
  inputNumber = number(e.target.value)
}
button1.onclick = function () {
  // count = number
  count = inputNumber + count
  text.textContent = count
}
button2.onclick = function () {
  alert("ok")
}
