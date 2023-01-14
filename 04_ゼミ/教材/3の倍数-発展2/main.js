//文字のなかに3が含まれる数字のとき

const three = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n.indexOf(3)) {
      console.log(`${n}!!!!`)
    } else {
      console.log(n)
    }
  }
}
