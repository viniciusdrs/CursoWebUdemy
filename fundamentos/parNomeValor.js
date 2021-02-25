// par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Fala' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vinicius',
    idade: 20,
    endereço:{
        logradouro: 'Rua sim',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
