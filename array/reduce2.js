const alunos = [
    { nome: 'Vinicius', nota: 7.3, bolsista: false },
    { nome: 'São Paulo', nota: 9.2, bolsista: true },
    { nome: 'Hoje', nota: 9.8, bolsista: false },
    { nome: 'Amanhã', nota: 8.7, bolsista: true}
]

//Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) =>  resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) =>  resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))