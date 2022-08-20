'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// el factorial de n es n! ( producto de todos los numeros naturales a n y mayores que a 0 )
function nFactorial(n) {
	//RESOLUCIÓN CORRECTA!
	if (n < 2) {return 1; // 0, 1
	}if (n === 2) { return 2;} // 2
	return n * nFactorial(n - 1);   // i--

	/* //RESOLUCION SIN RECURSIVIDAD.
	const secuencia = [ 0, 1, 2, 3, 4, 5 ];
	for (let i = 2; n > i; i++) {
		secuencia[i] = secuencia.reduce((a, b) => a * b);
	}
	return secuencia[n];
} */
}
function nFibonacci(n) {
	//RESOLUCIÓN CORRECTA
	if (n === 0) {
		return 0;
	}
	if (n < 3) {
		return 1 ;
	}
	return nFibonacci (n -2) + nFibonacci (n - 1); 

	//RESOLUCION SIN RECURSIVIDAD.

/* 	const secuencia = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]; // copio la secuencia para calcular num fibonacci

	for (let i = 2; i < n; i++) {
		// comienzo a iterear desde 2 , para poder sumar luego dos iteraciones hacia atrás.
		secuencia[i] = secuencia[i] - 2 + secuencia[i] - 1; //secuencia va a ser igual a la suma de i-2(0) e i-1(1) , mientras n sea menor a i, sigo iterando de a uno.
	}
	return secuencia[n]; // retorno el array en la posición n. */
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
	this.obj = [];

	this.enqueue = function(elemento) {
		this.obj.push(elemento);
	};

	this.dequeue = function() {
		if (this.obj.length === 0) {
			return undefined;
		}
		return this.obj.shift();
	};
	this.size = function() {
		this.obj.length;
		return this.obj.length;
	};
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Queue,
	nFactorial,
	nFibonacci
};
