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