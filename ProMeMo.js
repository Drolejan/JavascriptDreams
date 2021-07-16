//FUNCION PROMEDIO

function calcularMediaAritmetica(lista) {
    //Metodo con For
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    //Metodo con Reduce
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }
  
  //FUNCION MEDIANA

  function calcularMediana(lista){
  
  //Para ordenar numeros correctamente
    const lista1=lista.sort(function(a,b){return a-b});

  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }

  return mediana;
}

  //FUNCION MODA
 
function calcularModa(lista2){
  const lista2Count = {};
  
  lista2.map(
    function (elemento) {
      if (lista2Count[elemento]) {
        lista2Count[elemento] += 1;
      } else {
        lista2Count[elemento] = 1;
      }
    }
  );
  
  const lista2Array = Object.entries(lista2Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );

  let moda;
  
  if(lista2Array[lista2Array.length - 1][1]==lista2Array[lista2Array.length - 2][1]){
    moda = "Las Modas son:  " + lista2Array[lista2Array.length - 1] + " y " + lista2Array[lista2Array.length - 2]
  }
  else {
   moda = "La Moda es: "+lista2Array[lista2Array.length - 1];
  }

  return moda;
}