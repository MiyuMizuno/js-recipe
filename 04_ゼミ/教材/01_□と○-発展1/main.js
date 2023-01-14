//const { doc } = require("prettier")

const figure = document.getElementById("figure")
const text = document.getElementById("input-text")

figure.onclick = function () {
  figure.classList.toggle("rounded")
}

text.oninput = function () {
  console.log("入力されました")
  figure.classList.toggle("small")
}
