'use strict';

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.

PUEDO USAR CLASES Y CONSTRUCTORES PARA CREAR LOS METODOS TAMBIEN.
*/

function LinkedList() {
	this._length = 0;
	this.head = null;
}

function Node(value) {
	this.value = value;
	this.next = null;
}

LinkedList.prototype.add = function(value) {
	let nuevoNodo = new Node(value);
	if (!this.head) {
		//también puedo decir if(this.head === null). Ambas formas son correctas.
		this.head = nuevoNodo; //
		this._length++;
		return;
	} else {
		let current = this.head; // creo una variable para avanzar en la lista.
		while (current.next) {
			// Mientras el prox valor sea null..
			current = current.next; //seguí iterando. Current ya no es el head del nodo.
		}
		current.next = nuevoNodo; //Guardo el nuevo nodo en ese espacio vacío. Current.next
		this._length++;
		return;
	}
};

LinkedList.prototype.remove = function() {
	let current = this.head; //Redefino current
	if (!this.head) {
		// Pregunto, mientas no haya un head, retorna null.
		return null;
	}
	if (this.head.next === null) {
		//Si el valor siguiente a head es null..} Este if es aplicado a el caso en el que la lista sea de un solo nodo y/0 esté vacía.
		let result = current.value; // entonces, guarda el valor del nodo donde esta current en una variable "result" para usarla más tarde.
		this.head = null; //Ahora la lista esta vacía.
		this._length--; //Resta un valor a la lista.
		return result; //Retorno el resultado de lo que borré.
	} else {
		while (current.next.next !== null) {
			// Mientras current mire 2 nodos adelante y este ultimo no tenga un next null, entonces ...//Caso en que la lista tiene varios nodos.
			current = current.next; // Current va a seguir siendo current.next.
		}
		let result = current.next.value; // Me guardo el último valor antes de eliminarlo
		current.next = null; // Redefino current
		this._length--; // Achico la lista.
		return result; //Devuelvo el valor del nodo que eliminé.
	}
};

LinkedList.prototype.search = function(item) {
	//recibe parámetro
	let current = this.head; //Vuelvo a definir current. Y ahora no estoy un paso adelante.
	if (!this.head) {
		//Si no existe un head (es decir que la lista esta vacía)
		return null; //Retorno null.
	}
	while (current) {
		// Mientras exista current...
		if (current.value === item) {
			//..y el valor del current sea el mismo que 'item'...
			return current.value; // ...retorno ese valor.
		} else if (typeof item === 'function') {
			// Y si dice (a través de 'typeof') que 'item' es una función...
			if (item(current.value) === true) {
				//... si se cumple esa condicion -estoy aplicando esa callback(typeof) en cada nodo
				return current.value; //retorno el valor del current.
			}
		}
		current = current.next; //Reasigno current
	}
	return null; // Si no encontré el item, retorno null.
};

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
	this.numBuckets = 35;
	this.buckets = [];
}

HashTable.prototype.hash = function(key) {
	let sum = 0;
	for (let i = 0; i < key.length; i++) {
		sum += key.charCodeAt(i); // Devuelve un valor por cada caracter en cada iteración y guardo el resultado en sum.
		// sum = sum + key.charCodeAt(i)
	}
	return sum % this.numBuckets; // Devuelvo el resto de la division entre el resultado de la suma por la cantidad de buckets.
};

HashTable.prototype.set = function(key, value) {
	if (typeof key !== 'string') {
		// Si el Key no es un string...
		throw new TypeError('Keys must be strings'); //...arrojá un msj de error !
	}
	let i = this.hash(key); // Ejecuto la funcion hash sobre argumento key
	if (this.buckets[i] === undefined) {
		// Si en el array buckets en la posicion i, se encuentra vacio(undefined)...
		this.buckets[i] = {}; //.. entonces coloco un objeto en esa posicion
	}
	this.buckets[i][key] = value; // ... y en la posicion i del array, guardo la propiedad key y asigno el valor, (value).
};
HashTable.prototype.get = function(key) {
	let i = this.hash(key); //la propiedad key esta en la posicion i del array buckets ya hasheada
	return this.buckets[i][key]; // traigo el valor de la propiedad en la posicion i del array buckets.
};
HashTable.prototype.hasKey = function(key) {
	let i = this.hash(key); //la propiedad key esta en la posicion i del array buckets ya hasheada
	return this.buckets[i].hasOwnProperty(key); // Retorno si el array en la posicion i tiene una propiedad(key)- Devuelve un dato booleano. En esta caso TRUE.
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Node,
	LinkedList,
	HashTable
};
