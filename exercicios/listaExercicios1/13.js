function diaSemana(dia){

    switch (dia) {
        case 1:
        case 7:
            return "Fim de Semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
             return "Dia Útil"
        default :
            return "Dia Inválido"
    }
}

console.log(diaSemana(1))
console.log(diaSemana(2))
console.log(diaSemana(3))
console.log(diaSemana(4))
console.log(diaSemana(5))
console.log(diaSemana(6))
console.log(diaSemana(7))
console.log(diaSemana(8))
