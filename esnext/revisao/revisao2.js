// Arrow Function
const soma = (a, b) => a + b
console.log(soma(10, 6))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(null)
log('Sou mais forte que o valor padrão')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))