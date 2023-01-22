//要素
const problem = document.getElementById("problem")
// const button1 = document.getElementById("button0")
// const button2 = document.getElementById("button1")
// const button3 = document.getElementById("button2")
// const button4 = document.getElementById("button3")

const fb = document.getElementById("fb")

//クイズオブジェクト
const quiz = {
  problemText: "誕生月はどれだ？？",

  choice: [
    {
      buttonText: "1月",
      fbText: "残念！",
    },
    {
      buttonText: "3月",
      fbText: "残念!!",
    },
    {
      buttonText: "5月",
      fbText: "残念!!!",
    },
    {
      buttonText: "7月",
      fbText: "残念!!!!",
    },
    {
      buttonText: "10月",
      fbText: "残念!!!!!",
    },
    {
      buttonText: "12月",
      fbText: "正解🙆‍♀️",
    },
  ],
}

//表示
const load = function () {
  for (let n = 0; 0 <= quiz.choice[length]; n++) {
    const Button = document.createElement("button")
    Button.id = "button" + quiz.choice[n]
  }
  problem.textContent = quiz.problemText
  button1.textContent = quiz.choice[0].buttonText
  button2.textContent = quiz.choice[1].buttonText
  button3.textContent = quiz.choice[2].buttonText
  button4.textContent = quiz.choice[3].buttonText
}
//n番目を選んだら〜
const choiced = function (number) {
  fb.textContent = quiz.choice[number].fbText
}

//クリックしたとき
button1.onclick = function () {
  choiced(0)
}
button2.onclick = function () {
  choiced(1)
}
button3.onclick = function () {
  choiced(2)
}
button4.onclick = function () {
  choiced(3)
}

load()
