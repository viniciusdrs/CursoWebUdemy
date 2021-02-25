const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Vinicius',
        nota: 8.1
    }, {
        nome: 'São Paulo',
        nota: 10
    }]
},  {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Hoje',
        nota: 8.9
    }, {
        nome: 'Sempre',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 10 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)