//□
const figure = document.getElementById("figure")
//丸くなるボタン
//const circleButton = document.getElementById("circle-button")
//尖るボタン
//const squareButton = document.getElementById("square-button")

// circleButton.onclick = function () {
//   // figure に rounded クラスを追加する
//   figure.classList.add("rounded")
// }

// squareButton.onclick = function () {
//   figure.classList.remove("rounded")
// }

//ボタンではなく、figureをクリック
figure.onclick = function () {
  figure.classList.toggle("rounded")
}
