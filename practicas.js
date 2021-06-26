//alert("Holi");

const nombre='Alex';
const apellido='Medina';
const platziuser='drolejan';
let edad=29;
const email='contacto@drolejan.com';
let adultoresponsable=true;
let dinero=9001;
let deudas=3700;

console.log(nombre+' '+apellido);
console.log('Pagaste tus deudas ahora tienes: '+(dinero-deudas)+' dolares');

function saludoCordial(name,last,nick){
    let fullname=name+' '+last;
    return 'Mi nombre es '+fullname+', pero en el barrio me conocen como '+nick+'.';
}

console.log(saludoCordial('Alex','Medina','drolejan'));

let platziPlan="basic";

if(platziPlan=="free"){
    console.log("Toma los cursos gratis y convencete");
}
else if(platziPlan=="basic"){
    console.log("Tienes un mes de grandes cursos");
}
else if(platziPlan=="expert"){
    console.log("Tienes un año de nunca parar de aprender");
}
else if(platziPlan=="expert+"){
    console.log("Tu y alguien mas tienen un año de aprendizaje infinito");
}
else{
    console.log("Ese plan no existe....... aun");
}

let i=0;
while(i<5){
    console.log("El valor de i es: " + i);
    i++;
}

let j=10;
while(j>=2){
    console.log("El valor de j es: " + j);
    j--;
}

let respuesta = prompt("Cuanto es 2+2");
if(respuesta=="4"){
    console.log("Eres un genio...");
}
else{
    console.log("Tas bien?");
}

function listaprint(lis){
    for(const val of lis){
        console.log(val);
    }
    return console.log("El primer valor es: "+lis[0]);
}

let listilla=["hey","como","estas"];
listaprint(listilla);

let miObjeto={
    detalles: 'Un Objeto ',
    precio: 'Inbox '
}

function analizadorDeObjetos(obj){
    Object.values(obj).forEach((elem) => {
        console.log(elem);
      });
}

analizadorDeObjetos(miObjeto);