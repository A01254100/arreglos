input.onButtonPressed(Button.A, function () {
    for (let Contador = 0; Contador <= MedirArreglos; Contador++) {
        basic.showNumber(ArregloNumeros[Contador])
    }
})
input.onButtonPressed(Button.B, function () {
    ArregloNumeros.pop()
    MedirArreglos += -1
})
let MedirArreglos = 0
let ArregloNumeros: number[] = []
ArregloNumeros = [
5,
7,
8,
2,
1,
3
]
MedirArreglos = ArregloNumeros.length - 1
basic.forever(function () {
    basic.showNumber(0)
})
