// Función para generar un array de números enteros de -500 a 500
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
console.log(data)

const number = 9000000;

//TODO para la construccion del algoritmo O(n^2)
const searchIndexsONE = (num) => {
  let dataIndex = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      let suma = data[i] + data[j];

      if (suma === num) {  
        dataIndex.push(data[i]);
        dataIndex.push(data[j]);
        j = data.length;
        i = data.length;
      }
    }
  }
  return dataIndex;
};

//TODO para construir algoritmo O(n log n)
const sortArray = (arr) => {
    return arr.sort((a, b) => a - b);
}

const binarySearch = (arr, complement) => {
    let letf = 0;
    let rigth = arr.length - 1;
    while (letf <= rigth) {
        let mid = Math.floor((letf + rigth) / 2);
        if (arr[mid] === complement) {
            return true;
        } else if (arr[mid] < complement) {
            letf = mid + 1;
        } else {
            rigth = mid - 1;
        }
    }
    return false;
}

const searchIndexsTRHEE = (num) => {
    let dataIndex = [];
    let arr = sortArray(data);

    // Recorrer cada elemento del array
    for (let i = 0; i < arr.length; i++) {
        let complement = num - arr[i];

        // Buscar el complemento usando búsqueda binaria
        if (binarySearch(arr, complement)) {
            dataIndex.push(arr[i]);
            dataIndex.push(complement);
        }
    }
    return dataIndex;
}



//TODO para la construccion del algoritmo O(n)
const insertToMap = () => {  //Se construye un diccionario
  let map = new Map();

  for (let i = 0; i < data.length; i++) {
    map.set(data[i], i);
  }

  return map;
};


const searchIndexsTWO = (num) => {
  let dataIndex = [];
  let map = insertToMap(); //Se llena el Map con los datos del array

  for (let i = 0; i < data.length; i++) {
    let complement = num - data[i];

    if (map.has(complement)) {
      if (i != map.get(complement)) {
        dataIndex.push(data[map.get(complement)]); //Se obtiene el índice (el valor dentro del Map)
        dataIndex.push(data[i]);
        i = data.length;
      }
    }
  }

  return dataIndex;
};

let elements = searchIndexsTWO(number);

if (elements.length > 0) {
  console.log(`${elements[0]} + ${elements[1]} = ${number}`);
} else {
  console.log("No se encontraron elementos");
}
