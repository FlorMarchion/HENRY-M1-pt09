'use strict';

function BinarioADecimal(num) {
	// tu codigo aca

	/* let resultados = [];

  for (let i = num.length -1; i >= 0; i--){  //recorro el array a la inversa.(comienza en la .lengh - 1 para que no)
    resultados.push(num[i] *(2 ** [num.length-1-i] ));
  }
  let suma = resultados.reduce(function(acc, el){
    return acc + el;
  });

  return suma; */
	num = num.split('').reverse(); //"split('')" va a pasar el string a un arreglo
	//sum 2^Posicion * valor
	let result = 0;
	for (let i = 0; i < num.length; i++) {
		result = result + Math.pow(2, i) * parseInt(num[i]); // 2^0 * 0;
	}
	return result;
}

function DecimalABinario(num) {
	// tu codigo aca
	/* let lista = [];

	while (num > 0) {
		lista.unshift(num % 2);
		num = Math.floor(num / 2);
	}
	let resultado = lista.join('');
	return resultado; */

	//Dividir num por 2 (/2) hasta llegar a 0.
	let result = [];
	while (num > 0) {
		result.push(num % 2); // guardo el resto de la division.
		num = Math.floor(num / 2);
	}
	return result.reverse().join('');
}

module.exports = {
	BinarioADecimal,
	DecimalABinario
};
