//①3 で割ったあまりが 0 の場合に元気になるような処理を書いてみます。

const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!`)
    } else {
      console.log(n)
    }
  }
}
