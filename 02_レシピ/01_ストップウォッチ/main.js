const button = document.getElementById("button")
const display = document.getElementById("display")
let count = 0
//追加
let id = null

const start = function () {
  count += 1
  display.textContent = count / 100
}

// //これだけでは、バグ(タイマーが増える)
// button.onclick = function(){
//     setInterval(start, 10)
//     button.textContent = "stop"
// }

//完成品
button.onclick = function () {
  if (id === null) {
    id = setInterval(start, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
