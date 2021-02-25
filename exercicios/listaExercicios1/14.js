function compra(fruta) {

    switch (fruta) {
        case 'maçã':
            console.log(`Não vendemos ${fruta} aqui`)
            break
        case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}`)
            break
        case 'melancia':
            console.log(`Aqui está, são 3 reais o quilo da ${fruta}`)
            break
        default:
            console.log('ERRO Fruta não encontrada')
    }
}

compra('maçã')
compra('kiwi')
compra('melancia')
compra('limão')