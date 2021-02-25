function compra(automovel) {
    switch(automovel) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalho ocm esse tipo de automovel aqui.'

    }
}

console.log(compra('hatch'))
console.log(compra('sedan'))
console.log(compra('motocicleta'))
console.log(compra('caminhonete'))
console.log(compra('onibus'))