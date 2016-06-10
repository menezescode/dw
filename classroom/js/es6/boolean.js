// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Boolean_literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// literal / primitivo (true|false)
var variable = false;
console.log(variable);
console.log(typeof variable);
var variable = true;
console.log(variable);
console.log(typeof variable);

// case sensitive
// var variable = True;

// OO
var variable = new Boolean(false);
console.log(variable);
console.log(typeof variable);


// formas análogas do false / coercion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement
// 0, -0, null, false, NaN, undefined, or the empty string ("")
console.log(1 == false);
console.log(0 == false);
console.log(-0 == false);
console.log(false == false);
console.log("" == false);
console.log([] == false);
console.log([0] == false);
console.log({} != false);

console.log(undefined == undefined);
console.log(undefined == false);
var new_variable;
console.log(undefined == new_variable);
console.log(null == false);
console.log(undefined == null);
console.log(null == null);
console.log(NaN == false);
console.log(NaN == NaN);
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN
console.log(isNaN(NaN));
