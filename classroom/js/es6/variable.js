var variable;

// dinâmica
variable = 10;
console.log(variable);
variable = "lorem ipsum";
console.log(variable);

// Primitives (numbers, strings etc) are passed by value.
var variable_temp = variable;
console.log(variable_temp);
variable = 10;
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
// Destructuring Assignment / Fail-Soft Destructuring
var [ip, mask = "255.255.255.0"] = ["192.168.0.2"];
console.log(ip);
console.log(mask);
