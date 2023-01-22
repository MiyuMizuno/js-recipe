//要素の取得
//問題文
const quizText = document.getElementById("quiz-text")
//ボタン
const button1 = document.getElementById("choice-1")
const button2 = document.getElementById("choice-2")
const button3 = document.getElementById("choice-3")
//FB
const fbText = document.getElementById("feedback")

//問題文とボタン内容とFB
const quiz = {
  problem: "流行りの絵文字はどれでしょう？",
  choice: [
    {
      buttontext: "🐇",
      fbtext: "正解",
    },
    {
      buttontext: "🦁",
      fbtext: "不正解",
    },
    {
      buttontext: "🐸",
      fbtext: "不正解",
    },
  ],
}

//表示
const reloadQuiz = function () {
  quizText.textContent = "Q" + quiz.problem
  button1.textContent = quiz.choice[0].buttontext
  button2.textContent = quiz.choice[1].buttontext
  button3.textContent = quiz.choice[2].buttontext
}

//N番目のボタンが押されたらN番目のFBテキスト
const choiced = function (choiceNumber) {
  //choiceは配列なので、後ろも[]で指定
  fbText.textContent = quiz.choice[choiceNumber].fbtext
}

//ボタンが押されたときの処理
button1.onclick = function () {
  //引数choiceNumberの返り値を設定
  choiced(0)
}

button2.onclick = function () {
  choiced(1)
}

button3.onclick = function () {
  choiced(2)
}

reloadQuiz()
