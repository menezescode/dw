// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals

// literal []
var array = [];
console.log(array);
array[0] = 1; // load
array[1] = 2;
console.log(array);

// não restring o tamanho
array[10] = 9;
console.log(array);
console.log(array[0]); // read
console.log(array[2]); #=> undefined

var array = [1, 2, 3, 4];
console.log(array);
array[4] = 5;
console.log(array);
console.log(array.length);
array[array.length] = 6;

array.push(7);
console.log(array);
array.unshift(0);
console.log(array);
array.unshift(-1);
console.log(array);

// não restringe o tipo
var array = [1, "lorem", true, null, [1, 2, 3]];
console.log(array);
console.log(array[4][1]);

// índice pode não ser number
var array = [1, 2];
console.log(array[0]);
console.log(array[1]);
array['facilitou'] = 10;
console.log(array);
console.log(array['facilitou']);
array[array.length] = 20;
console.log(array);
console.log(array[2]);

// OO
var array = new Array(1, "lorem", true, null);
console.log(array);
var array = Array(1, "lorem", true, null);
console.log(array);
var array = new Array(10);
console.log(array);
