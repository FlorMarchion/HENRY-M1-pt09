
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;  // no hay diferencia entre crear una "var" y asignar el   valor directamente. "Inicializada". No tiene hosting- Es solo una asignación

var a = 5;
var b = 10;


var c = function(a, b, c) {
  var x = 10;   // inicializada y declarada
  console.log(x); // 10
  console.log(a); //8 (No está declarada en el contexto local, entonces se llama desde el contexto global)

//dentro de función C
var f = function(a, b, c) {
    b = a; // 8
    console.log(b);  //8
    b = c; //10
    var x = 5;
}

f(a,b,c);
// (8,9,10)

  console.log(b); // 9

}

c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); //undefined
console.log(baz); //undefined
foo();  //hola
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2; // no se declara,solo se ejecuta
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); // "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // "Franco"
   }
})();
console.log(instructor); // "Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // "The Flash"
    console.log(pm); //"Reverse Flash"
}
console.log(instructor); // "The Flash"
console.log(pm); // "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2 coerción de datos.
 "2" * "3" // "6"
4 + 5 + "px" // 9px
"$" + 4 + 5  // $45
"4" - 2 // 2 
"4px" - 2 // NaN
7 / 0 // Infinity  
{}[0] //undefined
parseInt("09") // 9
5 && 2 // 2 devuelve el ultimo valor (revisar operador &&)
2 && 5 // 5  devuelve el ultimo valor
5 || 0 //  5 devuelve el mayor valor ( si a es true, devuelve true)
0 || 5 // 5 devuelve el mayor valor
[3]+[3]-[10] // 23 ( concatena los numeros presedentes con el operador + y resta el valor precedido por el operador -)
3>2>1 // false ( ambas condiciones son true, entonces true no puede ser mayor que true) 3>2 = true, entonces true>1 = false.
[] == ![] // true ( con doble igual == chequea el valor y no el tipo de valor. Con el triple === chequea)??
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // ???
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test()); // se ejecuta desde el objeto global - undefined porque test no esta definida como función
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);// 1
   setTimeout(function() { console.log(2); }, 1000);//4
   setTimeout(function() { console.log(3); }, 0);//3
   console.log(4); //2
}

printing();
```
