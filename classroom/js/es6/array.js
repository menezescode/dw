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

// Spread operator - ES6
var params = [ "hello", true, 7 ];
var other = [ 1, 2, ...params ];
console.log(other);

var params = [ "hello", true, 7 ];
var other = [ 1, 2].concat(params);
console.log(other);

console.log([1, 2, 3, 2].indexOf(2));
console.log([1, 2, 3, 2].indexOf(2, 2));

// function programming / Iteration methods

// forEach
ips = [
  {address: "192.168.0.2", mask: "255.255.255.0"},
  {address: "192.168.0.10", mask: "255.255.255.0"},
  {address: "192.168.0.26", mask: "255.255.255.0"},
  {address: "192.168.0.30", mask: "255.255.255.0"}
]
ips.forEach(function(ip){
  console.log(ip.address);
});

// entries
for([key, value] of [1,2,3].entries()){
  console.log(`${key} => ${value}`);
}

// every
console.log([1, 2, 3].every(function(value){return value % 2 ==0}));
console.log([1, 2, 3].every((value) => value % 2 ==0));
console.log([2, 4, 6].every((value) => value % 2 ==0));

// some
console.log([1, 2, 3].some(function(value){return value % 2 ==0}));

// filter
console.log([1, 2, 3, 4, 5, 6].filter(function(value){return value % 2 ==0}));
console.log([1, 2, 3, 4, 5, 6].filter(function(value){return value % 2 ==0}));

array = [1, 2, 3, 4, 5, 6]
even = array.filter(function(value){return value % 2 ==0})
console.log(array.indexOf(even[0]));
console.log(array.indexOf(even[1]));

// find
console.log([1, 2, 3, 4, 5, 6].find(function(value){return value % 2 ==0}));

// map
console.log([1, 2, 3, 4, 5, 6].map((value) => value * 2));

// reduce
console.log([1, 2, 3].reduce((addition, value) => addition + value));

// reduceRight
console.log([1, 2, 3].reduceRight((addition, value) => addition + value));
