console.log("Hola figuras");

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function diametroCirculo(radio){
    return radio*2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return PI*diametro;
}

function areaCirculo(radio){
    return PI*(radio*radio);
}

//Funciones para HTML

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;
 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}