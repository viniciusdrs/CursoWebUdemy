console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Vinicius', 'São paulo', 'Hoje')
console.log(aprovados)

aprovados = ['Vinicius', 'São Paulo', 'Hoje']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Amanhã'
aprovados.push('Sim')
console.log(aprovados.length)

aprovados[9] = 'Não'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[2]
console.log(aprovados[2])
console.log(aprovados[3])

aprovados = ['Vinicius', 'São Paulo', 'Hoje']
aprovados.splice(1, 1)
console.log(aprovados)