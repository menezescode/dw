function sum(param1, param2){
  return param1 + param2;
}
console.log(sum(1, 1));
console.log(sum(1, 1, 3));

// Hoisting
console.log(sum(1, 1));
function sum(param1, param2){
  return param1 + param2;
}

// overloading function!!!
function sum(param1, param2, param3){
  return param1 + param2 + param3;
}
console.log(sum(1, 1, 3));

// default param
function sum(param1, param2=0){
  return param1 + param2;
}
console.log(sum(1, 1));
console.log(sum(1));

// rest param es6
function sum(...params){
  var summation = 0;
  for(let value of params){
    summation += value;
  }
  return summation;
}
console.log(sum(1));
console.log(sum(1, 1));
console.log(sum(1, 1, 1, 1));

function sum(param1, ...params){
  var summation = 0;
  summation += param1;
  for(let value of params){
    summation += value;
  }
  return summation;
}
console.log(sum(1));
console.log(sum(1, 1));
console.log(sum(1, 1, 1, 1));

function sum(){
  var summation = 0;
  for(let value of arguments){ //es5
    summation += value;
  }
  return summation;
}
console.log(sum(1));
console.log(sum(1, 1));
console.log(sum(1, 1, 1, 1));

// lambda / function anonymous / callback
const sum = function(param1, param2){
  return param1 + param2;
}
console.log(sum);
console.log(sum(1, 2));

var ip = {
  address: "192.168.0.1",
  mask: "255.255.255.0",
  toString: function(){
    return `${this.address}/${this.mask}`
  }
}
console.log(ip.toString());

// callback
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
console.log([1,1,1].reduce(function(sum,value){return sum+value}, 0));

// es6 Arrow Function
const sum = (param1, param2) => param1 + param2;
console.log([1,1,1].reduce((sum,value) => sum+value));
