//const { doc } = require("prettier")

// const figure = document.getElementById("figure")
// const text = document.getElementById("input-text")

// figure.onclick = function () {
//   figure.classList.toggle("rounded")
// }

// text.oninput = function () {
//   console.log("入力されました")
//   figure.classList.add("small")
// }

const figure = document.getElementById("figure")
var clicked = false

figure.onclick = function () {
  if (clicked) {
    figure.classList.toggle("small")
    clicked = false
    return
  }
  clicked = true
  setTimeout(function () {
    if (clicked) {
      figure.classList.toggle("rounded")
    }
    clicked = false
  }, 300)
}
