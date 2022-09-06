'use strict';
// No cambies los nombres de las funciones.

function quickSort(array) {
	// Implementar el método conocido como quickSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:

	// Array : [5, 1, 4, 2, 8]
	// [ 1, 4, 2 ]   +  [5, 8]
	// [1, 2]    [4]    [5] [8]
	// [1] [2] [4] [5] [8]

	// CASO CORTE: tengo que cortar cuando el array tenga un solo elemento.
	if (array.length <= 1) {
		return array;
	}
	// Armo los array para guar valores, menore, mayores e igual al pivot
	let pivot = array[Math.floor(Math.random() * array.length)]; //Redondea un valor al azar y lo multiplica por la longituddel array
	let minIzq = []; // [ 1, 4, 2 ]
	let mayorDer = []; //[5, 8]
	let equal = []; // 5

	for (let i = 0; i < array.length; i++) {
		// recorro todo el array.
		if (pivot > array[i]) {
			minIzq.push(array[i]);
		} else if (pivot < array[i]) {
			mayorDer.push(array[i]);
		} else {
			equal.push(array[i]);
		}
	}
	//RECURSIVIDAD !!!
	return quickSort(minIzq).concat(equal).concat(quickSort(mayorDer)); //Utilizo el metodo 'concat' para unir los array con recursividad.
	//Ejecuta la funcion nuevamente para recorrer el array minIzq. Hago lo mismo con mayorDer.
}

function mergeSort(array) {
	// Implementar el método conocido como mergeSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:

	// Recursivo.
	//Caso base: el array solo tiene un elemnto.
	//Funcion que divida el array//Funcion que una el array.

	//CASO BASE:
	if (array.length === 1) {
		return array;
	}
	let division = split(array); //guardo el resultado de split(array)
	let left = division[0]; //[left]
	let right = division[1]; //[right]

	return unir(mergeSort(left), mergeSort(right));//Recursion
}

//funcion que divide el array
function split(array) {
	let middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle); //no necesita segundo parametro si es hasta el final del array.

	return [left, right]; // [[left],[right]] devuelvo un array con mis dos arreglos.
}

//Funcion que une adecuadamente el arrelgo.
function unir(left, right) {
	let array = [];
	let leftIndex = 0;
	let rightIndex = 0;

	//utilizo el shile , porque me permite trabajar con 2 index.
	while (leftIndex < left.lengt && rightIndex < right.length) {
		//condicion para detener el ehile
		if (left[leftIndex] < right[rightIndex]) {
			array.push(left[leftIndex]);
			leftIndex++; //pasa a comparar el siguiente valor
		} else {
			array.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	quickSort,
	mergeSort
};
