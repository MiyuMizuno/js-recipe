//宣言(ボタン*２, カードコンテナ, 入力欄)

const addButton = document.getElementById("add-button")
const inputField = document.getElementById("input-todo")
const cardContainer = document.getElementById("cards-container")

//追加ボタンをクリックしたら
//①"入力欄"のテキストを読み込み
//②カードを作成した後、リストも作成=> 追加される度に生成
//③”カードコンテナ”にカードを表示 =>  リストをカードに追加した後、カードをカードコンテナに追加

addButton.onclick = function () {
  //①
  const text = inputField.value

  //②
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  //①
  const deleteButton = document.createElement("div")
  deleteButton.className = "deleteButton"

  //③
  card.append(todo)
  cardContainer.append(card)
}
// ？？inputFieldの中身を空欄にしたい
//inputField.textContent = ""

//削除ボタンをクリックしたら
//①HTMLで定義していないボタンを定義する => ボタンを作るタイミングはカードを表示する時
//②”カードコンテナ”からカードを削除

//②
deleteButton.onclick = function () {
  card.remove()
}
//削除ボタンが表示されない＝場所を追加してない
card.append(deleteButton)
