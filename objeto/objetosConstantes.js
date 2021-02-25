const pessoa = { nome: 'Vinicius'}
pessoa.nome = 'Hoje'
console.log(pessoa)

// pessoa = { nome: 'Amanhã'}

Object.freeze(pessoa)

pessoa.nome = 'Amanhã'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaconstante = Object.freeze({ nome: 'Vinicius'})
pessoaconstante.nome = 'Hoje'
console.log(pessoaconstante)