//1 秒ごとにカウントを増やしていき、3 の倍数のときだけ元気にコンソールに出力する

const genkiiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!`)
    } else {
      console.log(n)
    }
  }
}
setInterval(genkiiFunction, 1000)
