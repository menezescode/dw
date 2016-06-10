// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals
// http://json.org/number.gif
// [(+|-)][digits][.digits][(E|e)[(+|-)]digits]

// literal
console.log(15); // decimal
console.log(-15);
console.log(0xF); // Hexa
console.log(017); // Octal
console.log(0b1111); // binary
console.log(3.14);
console.log(-3.14);
console.log(.14);
console.log(-.14);
console.log(3.1E-12);
console.log(3.1e+12);
console.log(-3.1e+12);

// OO
console.log(new Number(15));
console.log(new Number(017));
console.log(3.14);

// funções
console.log(parseInt("15"));
console.log("15"+15);
console.log(parseInt("15")+15);
console.log(parseInt("12F"));
console.log(parseInt("F12"));
console.log(parseInt("F"));
console.log(parseInt("F", 10));
console.log(parseInt("F", 16)); #=> 15

console.log(Number(15).toString(16)); #=> f
console.log(Number(15).toString(2)); #=> 1111
console.log(Number(15412341234).toString(32));
