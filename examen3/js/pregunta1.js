function operacion() {

    var numero1 = 5;
    var numero2 = 2;

    suma = numero1 + numero2;
    resta = numero1 - numero2;
    multiplicacion = numero1 * numero2;
    division = numero1 / numero2;
    modulo = numero1 % numero2;

    console.log(
        "las variables son : " + numero1 + " y " + numero2 + "\n" +
        "la suma es: " + suma + "\n" +
        "la resta es: " + resta + "\n" +
        "la multiplicacion es: " + multiplicacion + "\n" +
        "la division es: " + division + "\n" +
        "el modulo es: " + modulo + "\n")

}

function bienvenido() {

    var nombre = "Cytnhia"
    console.log("Bienvenido " + nombre);
}

function impuesto() {
    total = 100;
    subtotal = total / 1.18;
    igv = subtotal * 0.18;

    console.log("el total es: " + total);
    console.log("el subtotal es: " + subtotal);
    console.log("el IGV es: " + igv);



}