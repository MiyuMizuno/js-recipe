const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}
console.dir(document)
console.dir(window)
// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()
// [やってみよう]
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const miyuu = {
  name: "みゆう",
  age: 22,
  hobbies: ["温泉", "ドライブ", "ジム"],
  address: {
    country: "日本",
    city: "福岡",
  },
}
console.log(miyuu)
