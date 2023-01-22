// HTML要素を取得する
const buyButtonTea = document.getElementById("buy-button-tea")
const buyButtonBeer = document.getElementById("buy-button-beer")

//const displayItems = document.getElementById("display-items")
const image = document.getElementById("image")
const imageI = image.style.direction
image.style.display = `none`

let saifu = 1000 //財布の所持金額
let jihankiMoney = 0 //投入金額
//投入ボタン
const buttons = document.getElementById("buttons")
const addButton500 = buttons.children[0]
const addButton100 = buttons.children[1]
const addButton50 = buttons.children[2]
const addButton10 = buttons.children[3]

//財布の所持金額
const displaySaifu = document.getElementById("display-saifu")
//投入金額
const displayJihankiMoney = document.getElementById("display-jihanki-money")
const returnButton = document.getElementById("return-button")

//投入する前は非活性
buyButtonTea.disabled = true
buyButtonBeer.disabled = true

// buyButtonTea を押した時の処理🍵
buyButtonTea.onclick = function () {
  image.style.display = imageI
  image.src = "./image/tea.png"
  //displayItems.textContent = displayItems.textContent + "🍵"
  //「お茶(100円)」ボタンを押した時に投入金額を減らす
  jihankiMoney = jihankiMoney - 100
  displayJihankiMoney.textContent = jihankiMoney
  buttonDisabled()
}
//buyButtonBeerを押した時の処理
buyButtonBeer.onclick = function () {
  image.style.display = imageI
  image.src =
    "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg"
  //displayItems.textContent = displayItems.textContent + "🍺"
  //「お茶(100円)」ボタンを押した時に投入金額を減らす
  jihankiMoney = jihankiMoney - 150
  displayJihankiMoney.textContent = jihankiMoney
  buttonDisabled()
}

// buttons.onclick = function () {
//   if (addButton500.onclick) {
//     //saifuから 100 引いて、jihankiMoney に 100 足す
//     saifu = saifu - 500
//     jihankiMoney = jihankiMoney + 500
//     console.log(saifu, jihankiMoney)
//   } else if (addButton100.onclick) {
//     saifu = saifu - 100
//     jihankiMoney = jihankiMoney + 100
//   } else if (addButton50.onclick) {
//     saifu = saifu - 50
//     jihankiMoney = jihankiMoney + 50
//   } else if (addButton10.onclick) {
//     saifu = saifu - 10
//     jihankiMoney = jihankiMoney + 10
//   }
//   //saifuとjihanki-moneyの状態を反映させる
//   displaySaifu.textContent = saifu
//   displayJihankiMoney.textContent = jihankiMoney

//   buttonDisabled()
// }

addButton500.onclick = function () {
  saifu = saifu - 500
  jihankiMoney = jihankiMoney + 500
  console.log(saifu, jihankiMoney)
  displaySaifu.textContent = saifu
  displayJihankiMoney.textContent = jihankiMoney

  buttonDisabled()
  saifuDisabled()
}

addButton100.onclick = function () {
  saifu = saifu - 100
  jihankiMoney = jihankiMoney + 100
  console.log(saifu, jihankiMoney)
  displaySaifu.textContent = saifu
  displayJihankiMoney.textContent = jihankiMoney

  buttonDisabled()
  saifuDisabled()
}
addButton50.onclick = function () {
  saifu = saifu - 50
  jihankiMoney = jihankiMoney + 50
  console.log(saifu, jihankiMoney)
  displaySaifu.textContent = saifu
  displayJihankiMoney.textContent = jihankiMoney

  buttonDisabled()
  saifuDisabled()
}

addButton10.onclick = function () {
  saifu = saifu - 10
  jihankiMoney = jihankiMoney + 10
  console.log(saifu, jihankiMoney)
  displaySaifu.textContent = saifu
  displayJihankiMoney.textContent = jihankiMoney

  buttonDisabled()
  saifuDisabled()
}

//お釣り
returnButton.onclick = function () {
  //財布に戻す
  saifu = saifu + jihankiMoney
  //表示
  displaySaifu.textContent = saifu
  //投入金額を０にする
  jihankiMoney = 0
  //表示
  displayJihankiMoney.textContent = jihankiMoney
}

//非活性
const buttonDisabled = function () {
  //投入金額がそれぞれの商品の値段に満たない時
  if (jihankiMoney < 100) {
    //100円より小さい時は、お茶とビールボタン両方を.disabled(押せなくする)をoff
    console.log(jihankiMoney)
    buyButtonTea.disabled = true
    buyButtonBeer.disabled = true
  } else if (jihankiMoney < 150) {
    //150円より小さい時は、お茶ボタンを.disabled(押せなくする)をoff,ビールボタンの.disabled(押せなくする)はonのまま
    console.log(jihankiMoney)
    buyButtonTea.disabled = false
    buyButtonBeer.disabled = true
  } else {
    buyButtonTea.disabled = false
    buyButtonBeer.disabled = false
  }
}
//非活性
const saifuDisabled = function () {
  if (saifu < 10) {
    addButton500.disabled = true
    addButton100.disabled = true
    addButton50.disabled = true
    addButton10.disabled = true
  } else if (saifu < 50) {
    addButton500.disabled = true
    addButton100.disabled = true
    addButton50.disabled = true
  } else if (saifu < 100) {
    addButton500.disabled = true
    addButton100.disabled = true
  } else if (saifu < 500) {
    addButton500.disabled = true
  }
}
