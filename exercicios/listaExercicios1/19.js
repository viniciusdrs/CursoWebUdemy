function cardapio(cod, quantidade) {
    switch(cod) {
        case 100:
            return 'O valor a ser pago será de: ' + quantidade * 3
        case 200:
            return 'O valor a ser pago será de: ' + quantidade * 4
        case 300:
            return 'O valor a ser pago será de: ' + quantidade * 5.50
        case 400:
            return 'O valor a ser pago será de: ' + quantidade * 7.50
        case 500:
            return 'O valor a ser pago será de: ' + quantidade * 3.50
        case 600:
            return 'O valor a ser pago será de: ' + quantidade * 2.80
        default:
            return 'Produto não existente.'
    }
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(700, 2))