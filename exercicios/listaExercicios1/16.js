function calc (num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return (num1 / num2).toFixed(2)
        default:
            return 'Operação Inválida.'
    }
}

console.log(calc(2,'+',3))
console.log(calc(2,'-',3))
console.log(calc(2,'*',3))
console.log(calc(2,'/',3))
console.log(calc(2,'.',3))