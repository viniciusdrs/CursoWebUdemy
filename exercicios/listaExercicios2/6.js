function inverso(valor) {
    const tipo = typeof valor

    if(tipo == "boolean") return console.log(!valor)
    else if(tipo == "number") return console.log(-valor)
    else
        return console.log('booleano ou número esperado, mas o parâmetro é do tipo string')
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")