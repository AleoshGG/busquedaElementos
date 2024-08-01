// Función para generar un array de números enteros de 0 a 80000
const generarArray = () => {
  const start = 0;
  const end = 80000;
  let array = [];

  for (let i = start; i <= end; i++) {
      array.push(i);
  }

  return array;
};

// Función para mezclar el array de forma aleatoria
const mezclarArray = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiar elementos
  }
  return arr;
};

// Generar y mezclar el array
const data = mezclarArray(generarArray());
//console.log(data);

const number = 90000;

// Algoritmo O(n^2)
const searchIndexsONE = (num) => {
  let dataIndex = [];
  let iterations = 0; // Contador de iteraciones

  console.time('O(n^2)');
  for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) { // Empieza en i + 1 para evitar la suma de un elemento consigo mismo
          iterations++;
          let suma = data[i] + data[j];

          if (suma === num) {
              dataIndex.push(data[i]);
              dataIndex.push(data[j]);
              break; // Rompe el segundo bucle
          }
      }
      if (dataIndex.length > 0) break; // Rompe el primer bucle si ya se encontró una pareja
  }

  console.log("     ")
  console.log("--- Tiempo de ejecucion y numero de iteraciones ---")
  console.log("     ")
  console.log("     ")

  console.log("  Solucion cuadratica  ")
  console.timeEnd('O(n^2)');
  console.log(`Iteraciones O(n^2): ${iterations}`);
  return dataIndex;
};

// Algoritmo O(n log n)
const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
}

const binarySearch = (arr, complement) => {
  let left = 0;
  let right = arr.length - 1;
  let iterations = 0; // Contador de iteraciones

  while (left <= right) {
      iterations++;
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === complement) {
          return true;
      } else if (arr[mid] < complement) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return false;
}

const searchIndexsTHREE = (num) => {
  let dataIndex = [];
  let arr = sortArray(data);
  let iterations = 0; // Contador de iteraciones

  console.time('O(n log n)');
  for (let i = 0; i < arr.length; i++) {
      iterations++;
      let complement = num - arr[i];

      if (binarySearch(arr, complement)) {
          dataIndex.push(arr[i]);
          dataIndex.push(complement);
          break; // Rompe el bucle si ya se encontró una pareja
      }
  }

  console.log("     ")
  console.log("  Solucion logaritmica   ")
  console.timeEnd('O(n log n)');
  console.log(`Iteraciones O(n log n): ${iterations}`);
  return dataIndex;
}

// Algoritmo O(n)
const insertToMap = () => {  //Se construye un diccionario
  let map = new Map();
  let iterations = 0; // Contador de iteraciones

  console.time('O(n) Insert To Map');
  for (let i = 0; i < data.length; i++) {
      map.set(data[i], i);
      iterations++;
  }
  console.timeEnd('O(n) Insert To Map');
  console.log(`Iteraciones O(n) Insert To Map: ${iterations}`);
  return map;
};

const searchIndexsTWO = (num) => {
  let dataIndex = [];
  let map = insertToMap(); //Se llena el Map con los datos del array
  let iterations = 0; // Contador de iteraciones

  console.time('O(n)');
  for (let i = 0; i < data.length; i++) {
      iterations++;
      let complement = num - data[i];

      if (map.has(complement)) {
          if (i !== map.get(complement)) {
              dataIndex.push(data[map.get(complement)]); //Se obtiene el índice (el valor dentro del Map)
              dataIndex.push(data[i]);
              break; // Rompe el bucle si ya se encontró una pareja
          }
      }
  }



  console.log("     ")
  console.log("  Solucion Lineal  ")
  console.timeEnd('O(n)');
  console.log(`Iteraciones O(n): ${iterations}`);
  return dataIndex;
};

// Ejecutar y mostrar resultados
let elementsONE = searchIndexsONE(number);
let elementsTHREE = searchIndexsTHREE(number);
let elementsTWO = searchIndexsTWO(number);

if (elementsONE.length > 0) {
  console.log("                    ")
  console.log("-----Resultados-----")
  console.log("                    ")
  console.log(`O(n^2): ${elementsONE[0]} + ${elementsONE[1]} = ${number}`);
} else {
  console.log("O(n^2): No se encontraron elementos");
}

if (elementsTHREE.length > 0) {
  console.log(`O(n log n): ${elementsTHREE[0]} + ${elementsTHREE[1]} = ${number}`);
} else {
  console.log("O(n log n): No se encontraron elementos");
}

if (elementsTWO.length > 0) {
  console.log(`O(n): ${elementsTWO[0]} + ${elementsTWO[1]} = ${number}`);
} else {
  console.log("O(n): No se encontraron elementos");
}
