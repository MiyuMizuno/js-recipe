//１から指定した数までの FizzBuzz の結果を表示する

const fizzBuzzFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(n)
    }
  }
}
fizzBuzzFunction(24)
