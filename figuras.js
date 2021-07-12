console.log("Hola figuras");

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

function perimetroTriangulo(lado1,lado2,base){
    return (Number(lado1) + Number(lado2) + Number(base));
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function areaIsosceles(lado1,lado2,base){
    if(lado1===lado2){
        const cateto=base/2;
        const altura=Math.sqrt((lado1**2)-(cateto**2));
        return(base*altura)/2;
    }
    else{
        alert("Esto no es un triangulo isosceles");
    }
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
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const base = input3.value;
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}
   
function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTriangulo3");
    const base = input3.value;
    const input4 = document.getElementById("InputTriangulo4");
    const altura = input4.value;
       const area = areaTriangulo(base,altura);
       alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
   
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
       const area = areaCirculo(radio);
       alert(area);
}

function calcularAreaIsoceles() {
    const input3 = document.getElementById("InputLado1");
    const lado1 = input3.value;
    const input4 = document.getElementById("InputLado2");
    const lado2 = input4.value;
    const input5 = document.getElementById("InputBase");
    const base = input5.value;
       const area = areaIsosceles(lado1,lado2,base);
       alert(area);
}