const figure = document.getElementById("figure")
let clickCount = 0

figure.ondblclick = function () {
  clickCount += 1
  if (clickCount === 1) {
    console.log("1")
    //figure.classList.remove("square")
    figure.classList.add("rounded")
  } else if (clickCount === 2) {
    console.log("2")
    figure.classList.remove("rounded")
    figure.classList.add("big")
  } else if (clickCount === 3) {
    console.log("3")
    figure.classList.remove("big")
    figure.classList.add("square")
    clickCount = 0
  } else {
    console.log("範囲外")
  }
}
