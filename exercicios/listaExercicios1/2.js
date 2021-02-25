function triangulo(lado1, lado2, base) {
    if(lado1 == lado2 && lado1 == base) {
        return 'Equilátero'
    } else if(lado1 == lado2 || lado1 == base || lado2 == base) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// Equilátero
console.log(triangulo(10, 10, 10))

//Isósceles
console.log(triangulo(10, 10, 20))
console.log(triangulo(10, 20, 10))
console.log(triangulo(10, 20, 20))

// Escaleno
console.log(triangulo(10, 20, 30))