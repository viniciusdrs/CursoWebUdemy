let num1 = 1
let num2 = 2

num1++ // pos fixada
console.log(num1)
--num1 // pre fixada (maior precedencia do que pos fixada)
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)