// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArreglo = [];
  for (i = 0; i < array.length; i++) {
    nuevoArreglo[i] = array[i] +1;
  }
  return nuevoArreglo;
<<<<<<< HEAD
 /* for(var i = 0; i < array.length; i++) {
    array[i] = array[i] +1
  }
  return array*/

 /* var array1 = array.map((elemento) => elemento + 1)
  return array1 // .map guarda en elemento los valores del array*/
=======
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
<<<<<<< HEAD

  //array.push(elemento) // manera facil
  // return array

=======
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
  array[array.length] = elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join (' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
<<<<<<< HEAD
  //return array.includes(elemento) // manera facil
  
=======
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;      
    }    
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  sumanumeros = 0;
  
  for (var i = 0; i < numeros.length; i++) {
   sumanumeros = sumanumeros + numeros[i];   
  }
  return sumanumeros
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
<<<<<<< HEAD
  //return agregarNumeros(resultadosTest) / resultadosTest.length // utilice funcion anterior para agregar los puntajes y de divide con el numero de datos

  var suma = 0;
  var promedio = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]
  }
  promedio = suma / resultadosTest.length;
  return promedio;
=======
  return agregarNumeros(resultadosTest) / resultadosTest.length // utilice funcion anterior para agregar los puntajes y de divide con el numero de datos
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
}  


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
<<<<<<< HEAD

  //return Math.max(...numeros)
  var mayor = numeros[0];
  for (i = 0; i < numeros.length; i++) {
    if(numeros[i] > mayor) {
      mayor = numeros[i];            
    }        
  }
  return mayor;
=======
  var masgrande = numeros[0];
  for (i = 0; i < numeros.length; i++) {
    if(numeros[i] > masgrande) {
      masgrande = numeros[i];            
    }        
  }
  return masgrande;
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
<<<<<<< HEAD
 /* var multiplica = 1;
=======
  var multiplica = 1;
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
  if (arguments.length < 1) return 0;
      for( i = 0; i < arguments.length; i++){
        multiplica = multiplica * arguments[i];
    }
<<<<<<< HEAD
    return multiplica;*/
    if(arguments.length == 0) return 0
    if(arguments.length == 1) return arguments[0]
    let resultado = 1
    for(let i = 0; i < arguments.length; i++) {
      resultado *= arguments[i]
    }
    return resultado
=======
    return multiplica;
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var retorna = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 19){
      retorna ++;
    }
  }
  return retorna
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana';    
  }
  else {
    return 'Es dia Laboral';
  }  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()
  if(num.charAt(0) === "9"){
    return true
  }
  return false  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
<<<<<<< HEAD
  /*for (var i = 0; i < arreglo.length; i++) {
=======
  for (var i = 0; i < arreglo.length; i++) {
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
    if (arreglo[i] === arreglo[i+1]) {
      arreglo.length +1;
      return true;    
    }    
<<<<<<< HEAD
  }*/
  var comparacion = arreglo[0]; 
  for(var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] != comparacion) return false
  }
  return true
=======
  }
  return false;  
>>>>>>> 9ff0f1dbc36265f5f2e92ad2664bc0e3ff72f922
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var newArray = [];
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      newArray.push(array[i]);
    }
  }
  if(newArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return newArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevio array.
  // Tu código:
  var nuevoArray = [];
  for(let i= 0; i < array.length; i++) {
    if(array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
