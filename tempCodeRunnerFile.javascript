function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var sumapuntajes = 0;
    for(var i = 0; i < resultadosTest.leng; i++){
      sumapuntajes = sumapuntajes + resultadosTest[i];
    }
    return sumapuntajes / sumapuntajes.length;
  }  
    