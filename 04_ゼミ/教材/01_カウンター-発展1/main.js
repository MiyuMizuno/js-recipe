//カウントを1 つ減らすボタンと2 倍にするボタン

//要素
const text = document.getElementById("display")
const button1 = document.getElementById("kakeru")
const button2 = document.getElementById("minus")
let number = 1

button1.onclick = function () {
  number *= 2
  text.textContent = number
}

button2.onclick = function () {
  number -= 1
  text.textContent = number
}
