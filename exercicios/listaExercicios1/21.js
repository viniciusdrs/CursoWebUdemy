function convenio(idade) {
    if(idade < 10) {
        return 180
    } else if(idade < 30) {
        return 150
    } else if(idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(convenio(8))
console.log(convenio(15))
console.log(convenio(35))
console.log(convenio(52))
console.log(convenio(80))
