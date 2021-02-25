function maiorOuIgual(num1, num2) {
    if(typeof num1 != typeof num2) return console.log(false)
    
        return console.log(num1 >= num2)
}
maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)