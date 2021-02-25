function calcularSalario(horasTrabalhadas, recebePorHora) {
    const salario = horasTrabalhadas * recebePorHora
    
    return console.log(`Salário igual a R$ ${salario}`)
}

calcularSalario(150, 40.5)