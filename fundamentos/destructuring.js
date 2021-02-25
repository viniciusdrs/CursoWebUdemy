const pessoa = {
    nome: 'Vinicius',
    idade: 20,
    endereco: {
        logradouro: 'Rua aaaa',
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, hoje = true } = pessoa
console.log(sobrenome, hoje) 

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)