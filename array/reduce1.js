const alunos = [
    { nome: 'Vinicius', nota: 7.3, bolsista: false },
    { nome: 'São Paulo', nota: 9.2, bolsista: true },
    { nome: 'Hoje', nota: 9.8, bolsista: false },
    { nome: 'Amanhã', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)