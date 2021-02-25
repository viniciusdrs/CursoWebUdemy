function estaEntre(numero, minimo, maximo, inclusivo = false) {
    
    if(inclusivo) 
    return console.log(numero >= minimo && numero <= maximo)

    return console.log(numero > minimo && numero < maximo)
}

estaEntre(60, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)

