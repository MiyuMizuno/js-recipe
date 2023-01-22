const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]

//練習問題：taiikuが3以上の生徒だけを要素に持つ配列 =>つまり要素の内容を取得して配列にする
const Taiiku = seisekibo.find(function (obj) {
  return obj.taiiku >= 3
})
console.log(Taiiku)

//配列
//localStorage.~~
const fruit = ["りんご", "みかん", "パイナップル"]
localStorage.fruit = JSON.stringify(fruit)
console.log(fruit)

//localStorage.setItem
const fruits = ["りんご", "みかん", "パイナップル"]
localStorage.setItem(fruits, JSON.stringify(fruits))
console.log(fruits)

//問題1:受講生名(miyu),番号(111)が入ったwebEXオブジェクトを保存＋取得　*２パターン
//問題2:保存された文字列を配列GeekSalonに直す
//問題3:”こんにちは”が入った変数名(aisatu)を保存する＋取得

//問題1
//配列・オブジェクトを定義
const webEX = {
  student: "miyu",
  number: 111,
}
//JSON形式に直して、保存する
localStorage.webEX = JSON.stringify(webEX)

localStorage.setItem(webEX, JSON.stringify(webEX))

//問題2
let miyu = JSON.parse(localStorage.webEX)
console.log(miyu)

//問題3
localStorage.aisatu = "おはよう"
//localStorage.getItem(aisatu)

localStorage.setItem("aisatus", "おはよう")
localStorage.setItem("aisatus", "こんにちは")
localStorage.getItem("aisatus")
