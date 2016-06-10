// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// literal '' , "", ``
var name = 'lorem ipsum';
console.log(name);
var name = "lorem ipsum";
console.log(name);

var tag = '<span class="ativa">10</span>';
console.log(tag);
var tag = "<span class=\"ativa\">10</span>";
console.log(tag);

// JavaScript special characters
var escape = "lorem\nipsum";
console.log(escape);
// console.log("\065");
console.log("\x41");
console.log("\u0041");
console.log("\u{00041}");

// concatenação
var name = "Fulano";
console.log("Olá "+name);
console.log("Olá",name,"dsf");

// multiline
var string = "lorem \
ipsum";
console.log(string);
var string = "lorem "+
"ipsum";
console.log(string);

// template string
var name = "Fulano";
console.log(`olá ${name}`);
console.log(`1+1=${1+1}`);
console.log("1+1="+(1+1));

// OO
var string = new String("lorem ipsum");
console.log(string);
var string = String("lorem ipsum");
console.log(string);

// symbols
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
var sym = Symbol("foo");
console.log(sym);
var sym2 = Symbol.for("foo");
console.log(sym2);
