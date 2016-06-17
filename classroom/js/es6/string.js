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

// Unicode and JavaScript
// http://speakingjs.com/es5/ch24.html
console.log('\101'); // Unicode sequence: three octal digits XXX between 0 and 377
console.log('\x41'); // Unicode sequence: two hexadecimal digits XX between 00 and FF
console.log('\u0041'); //  Unicode sequence: four hexadecimal digits XXXX - BMP
console.log('I \u2661 JavaScript!');
console.log('\u{00041}'); // U+0041 (Unicode code point escapes \u{XXXXX} ES6)
                          // \u{00041} = \u{00041}\u{00041}
'A'.length // U+0041 LATIN CAPITAL LETTER A
'A' == '\u0041'

// Unicode problem
// https://mathiasbynens.be/notes/javascript-unicode
console.log('\u{41}\u{42}\u{43}');
console.log('\u{1F4A9}');
// surrogate pair <h,l>
// https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs
console.log('\uD83D\uDCA9');
'𝐀'.length // U+1D400 MATHEMATICAL BOLD CAPITAL A
'𝐀' == '\uD835\uDC00'

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
// Unique and immutable data type to be used as an identifier for object properties
var sym = Symbol("foo");
console.log(sym);
var sym2 = Symbol.for("foo"); //Global Symbol
console.log(sym2);
console.log(Symbol.for("foo") !== Symbol.for("foo"))
console.log(Symbol("foo") !== Symbol("foo"))
