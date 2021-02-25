const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// Factory simples
// Factory é uma função que retorna um objeto
function criarPessoa() {
    return {
        nome: 'Vinicius',
        sobrenome: 'Reis'

    }
}

console.log(criarPessoa())