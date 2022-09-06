'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes METODOS RECURSIVOS:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
//IZQUIERDA : numeros menores.
// DERECHA: numeros mayores.

function BinarySearchTree(value) {
	this.value = value; // root 20
	this.left = null; // los estamos asignando como nodo hoja
	this.right = null; // nodo
}

BinarySearchTree.prototype.size = function(value) {
	if (this.left === null && this.right == null) return 1; // tambien puedo escribirlo de esta forma : if(!this.left && !this.rigth)  return 1;

	if (!this.left) {
		// si no existe valor en this.left, retorna 1 y sumale esta misma funcion ejecutada del otro lado, es decir, en this.right
		return 1 + this.right.size(); //Hago recursividad en right cuando no hay valor en left
	}
	if (!this.right) {
		return 1 + this.left.size();
	} else {
		return 1 + this.left.size() + this.right.size(); // Si en ambos lados existe un valor (retorno 1 + recursividad en ambos lados)ej: if(this.left !== null && this.right !== null) en este caso, ejecuto este else
	}
};

BinarySearchTree.prototype.insert = function(value) {
	let nodo = new BinarySearchTree(value);
	if (value > this.value) {
		if (this.right === null) {
			this.right = nodo;
		} else {
			this.right.insert(value);
		}
	}
	if (value < this.value) {
		if (this.left === null) {
			this.left = nodo;
		} else {
			this.left.insert(value);
		}
	}

	//también puedo decir if(!this.right)
	//if(this.right === null) this.right = new BinarySearchTree;
	//else this.right.insert(value)
};

BinarySearchTree.prototype.contains = function(value) {
	if (value === this.value) return true; // CASO BASE(cuando se cumple, corta la ejecucuión.Pregrunto si el valor pasado es igual que el root(this.value). Si lo es, devuelve true y conta la ejecucuión.

	if (value > this.value) {
		if (this.right === null)
			return false; // Si a la derecha no tengo un valor, va a ser false.
		else return this.right.contains(value); //Si this.right tiene un valor, vuelve a preguntar de vuelta si value = this.value. Es decir, aplico recursividad en el right.
	}

	if (value < this.value) {
		if (this.left === null) return false;
		else return this.left.contains(value);
	}
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
	if (order === 'pre-order') {
		// root - left - right
		cb(this.value); //cb se pasa por test y se ejecuta con cada root.
		if (this.left !== null) this.left.depthFirstForEach(cb, order);
		if (this.right !== null) this.right.depthFirstForEach(cb, order);
	} else if (order === 'post-order') {
		// left - right - root
		if (this.left !== null) this.left.depthFirstForEach(cb, order);
		if (this.right !== null) this.right.depthFirstForEach(cb, order);
		cb(this.value);
	} else {
		//left - root - rightbf

		if (this.left !== null) this.left.depthFirstForEach(cb, order);
		cb(this.value);
		if (this.right !== null) this.right.depthFirstForEach(cb, order);
	}
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
	//paso el array como parametro porque quiero que se ejecute cada vez que llamo a esta funcion , pero como un array auxiliar.

	if (this.left !== null) array.push(this.left);
	if (this.rigth !== null) array.push(this.right);

	cb(this.value); //me estan pasando un cb por test y debo ejecutar esa funcion por cada nodo que vaya recorriendo.

	if(array.length > 0) array.shift().breadthFirstForEach(cb, array);
	// Le digo : si el array es mayor a 0 , que saque el primer elemento del array(método shift) y aplico recursividad llamando de vuelta a la funcion breathFirstForEach.
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree
};
