// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Vinicius', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Vinicius', 'Hoje', 'São Paulo']
const grupoFinal = ['Rockets', ...grupoA, 'Chiefs']
console.log(grupoFinal)