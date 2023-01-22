//要素を取得
const display = document.getElementById("display")

//子要素を取得するために、親要素を取得
const buttons = document.getElementById("buttons")
//こ要素を取得
const kintaiButton = buttons.children[0]
const utiageButton = buttons.children[1]

//const kintaiButton = document.getElementById("button1")
//const utiageButton = document.getElementById("button2")

//状況に応じて絵文字を表示する
//出勤中は👩‍💻退勤中は😊、宇宙いるとき✨🪐✨地球にいるとき🈁➡️🌏

//状況を保管する変数を作る
let isWork = true
let isInSpace = true

//表示する関数を作る
const draw = function () {
  if (isWork) {
    display.textContent = "👩‍💻"
    kintaiButton.textContent = "退勤する"
  } else {
    display.textContent = "😊"
    kintaiButton.textContent = "出勤する"
  }
  if (isInSpace) {
    display.textContent += "✨🪐✨"
    utiageButton.textContent = "地球に行く"
  } else {
    display.textContent += "🈁➡️🌏"
    utiageButton.textContent = "宇宙に行く"
  }
}

//draw()
console.log(display)

//ボタンを押したときに状況を変える
kintaiButton.onclick = function () {
  draw()
  isWork = !isWork
  console.log(isWork)
}

utiageButton.onclick = function () {
  draw()
  isInSpace = !isInSpace
  console.log(isInSpace)
}
