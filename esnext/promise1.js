new Promise(function(resolve) {
    resolve(['Vinicius', 'São Paulo', 'Rockets', 'Chiefs'])
})
    .then(primeiroValor  => primeiroValor[0])
    .then(primeiraLetra => primeiraLetra[0])
    .then(letraMinuscula => letraMinuscula.toLowerCase())
    .then(console.log)