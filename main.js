//Datos de prueba
const data = [
  -15, 72, 56, 82, 12, 7, -85, -47, 40, 25, 9, -59, -86, -88, 34, 86, 43, -38,
  -54, -27, 29, 3, -19, -69, 57, 47, -9, 85, 63, 11, -29, 74, -68, 67, 16, 20,
  -21, 4, 52, 30, -56, 69, 14, 48, -76, 59, -42, -93, -13, 5, -5, 35, 27, -99,
  -24, 77, -89, 71, 56, 36, -32, -94, -34, 19, 17, -45, 22, -6, 99, 24, 90, 39,
  61, 38, 68, 91, 92, -61, -11, -28, 23, 81, -63, 33, 55, 70, 64, 42, 78, 50,
  -3, -30, -80, -12, 79, -31, 21, 60, 49, -55, 54, 2, 8, 6, 65, 32, -10, -46,
  58, -41, 26, 45, -95, -4, -96, 87, 95, 51, 10, -44, -98, 76, 46, 18, 83, 44,
  98, -16, 89, 72, 66, 37, 62, 53, -91, 28, -2, 41, -14, 84, 1, -90, 88, -77,
  73, 31, 13, 15, 80, 75, 100, -8, 93, -40, -97, 97, 94, 96, -57, -60, -7, -18,
  -70, -17, -1, -48, -36, -50, -83, -84, -35, -25, -43, -52, -87, -33, -49, -22,
  -58, -64, -20, -37, -66, -92, -67, -51, -65, -26, -74, -71, -23, -78, -62,
  -53, -75, -39, -60, -100, -79, -72, -81, -73,
];
const number = -30;

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

//TODO para construir algoritmo O(log n)

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
