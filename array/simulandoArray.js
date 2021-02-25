const quaseArray = { 0: 'Vinicius', 1: 'São Paulo', 2: 'Hoje' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Vinicius', 'São Paulo', 'Hoje']
console.log(quaseArray.toString(), meuArray)