const quizText = document.getElementById("quiz-text")
const quizImg = document.getElementById("quiz-image")
const button0 = document.getElementById("choice-0")
const button1 = document.getElementById("choice-1")
const button2 = document.getElementById("choice-2")
const nextButton = document.getElementById("next-quiz")
const saveStyle = nextButton.style.display
const fbText = document.getElementById("feedback")

let quizNumber = 0

const Quiz = [
  {
    title: "次の写真に勝てるのはどれ？",
    img: "Two.jpeg",
    choice: [
      {
        text: "ぐー",
        Fb: "正解！勝ちだよ",
        isCorrect: true,
      },
      {
        text: "ちょき",
        Fb: "残念！あいこだよ",
        isCorrect: false,
      },
      {
        text: "ぱー",
        Fb: "残念！負けだよ",
        isCorrect: false,
      },
    ],
  },
  {
    title: "月は何色？",
    img: "Ganymede.jpg",
    choice: [
      {
        text: "無色",
        Fb: "残念",
        isCorrect: false,
      },
      {
        text: "黄色",
        Fb: "残念！",
        isCorrect: false,
      },
      {
        text: "白",
        Fb: "正解！",
        isCorrect: true,
      },
    ],
  },
  {
    title: "この白の名前は？",
    img: "maruoka.png",
    choice: [
      {
        text: "丸岡城",
        Fb: "正解！どこからどうみても丸岡城だね。",
        isCorrect: true,
      },
      {
        text: "丸亀城",
        Fb: "残念！どこからどうみても丸亀城ではないよ",
        isCorrect: false,
      },
      {
        text: "丸子城",
        Fb: "残念！どこからどうみても丸子城ではないよ。",
        isCorrect: false,
      },
    ],
  },
]

//最初から表示
const reload = function (quizNumber) {
  //const quiz = Quiz[quizNumber]
  quizText.textContent = Quiz[quizNumber].title
  quizImg.src = "./images/" + Quiz[quizNumber].img
  button0.textContent = Quiz[quizNumber].choice[0].text
  button1.textContent = Quiz[quizNumber].choice[1].text
  button2.textContent = Quiz[quizNumber].choice[2].text

  nextButton.style.display = `none`
  fbText.textContent = ""
}

//n番目のボタンを押した時
const choose = function (chooseNumber) {
  fbText.textContent = Quiz[quizNumber].choice[chooseNumber].Fb

  if (Quiz[quizNumber].choice[chooseNumber].isCorrect) {
    if (quizNumber < Quiz.length) {
      nextButton.style.display = saveStyle
    }
  }
}

button0.onclick = function () {
  choose(0)
}

button1.onclick = function () {
  choose(1)
}

button2.onclick = function () {
  choose(2)
}

nextButton.onclick = function () {
  quizNumber += 1
  reload(quizNumber)
}
reload(0)
