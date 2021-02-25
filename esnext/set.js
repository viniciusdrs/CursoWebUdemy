// não aceita repetição/não indexada
const times = new Set()
times.add('São Paulo')
times.add('Chiefs').add('Rockets').add('Dodgers')
times.add('Golden Knights')
times.add('São Paulo')

console.log(times)
console.log(times.size)
console.log(times.has('chiefs'))
console.log(times.has('Chiefs'))
times.delete('Rockets')
console.log(times.has('Rockets'))

const nomes = ['Vinicius', 'Hoje', 'Amanhã', 'Hoje']
const nomesSet = new Set(nomes)
console.log(nomesSet)aaa