const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento no ultimo indice do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um novo elemento no primeiro indice do array
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // Ira adicionar no indice 2 ('Bottas' e 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Ira remover o 1 elemento do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Cria um novo array da partir do indice selecionado
console.log(algunsPilotos1)

// Cria um novo array da partir do indice selecionado porem o ultimo indice que voce selecionou não ira entrar
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)