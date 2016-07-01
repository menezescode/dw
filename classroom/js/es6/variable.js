// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variables
var variable;
var 1variable; // digits
// identifier must start with a letter, underscore (_), or dollar sign ($)
var &variable; // special character
var _variable;
var $variable;

// dinâmica
variable = 10;
console.log(variable);
variable = "lorem ipsum";
console.log(variable);

// Hoisting
console.log(variable);
var variable = 10;

// Primitives (numbers, strings, boolean etc) are passed by value.
var variable_temp = variable;
console.log(variable_temp);
variable = 10;
console.log(variable_temp);

var variable = new String("lorem ipsum");
var variable_temp = variable;
variable_temp = Number(10);
console.log(variable);
console.log(variable_temp);

// case sensitive
var Variable = 20;
console.log(Variable);
console.log(variable);

// constante
const VALUE = 10;
console.log(VALUE);
VALUE = 100;
console.log(VALUE);

// declaração múltipla
var x, y, z;
console.log(x);
console.log(y);
console.log(z);
var a = 1, b = 2, c = 3;
console.log(a);
console.log(b);
console.log(c);

// Destructuring Assignment / Array Matching
var [a, b] = [10, 20];
console.log(a);
console.log(b);
// Destructuring Assignment / Object Matching
var {ip, mask} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ip);
console.log(mask);
// Destructuring Assignment / Deep Matching
var {ip: ipAdd, mask: maskAdd} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ipAdd);
console.log(maskAdd);
var {mask: maskAdd, ip: ipAdd} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ipAdd);
console.log(maskAdd);
var {mask: maskAdd, ip: ipAdd, ip: ipAdd2} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ipAdd);
console.log(ipAdd2);
console.log(maskAdd);
// Destructuring Assignment / Fail-Soft Destructuring
var [ip, mask = "255.255.255.0"] = ["192.168.0.2"];
console.log(ip);
console.log(mask);
var [ip, mask = "255.255.255.0"] = ["192.168.0.2", "255.255.0.0"];
console.log(ip);
console.log(mask);
