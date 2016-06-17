// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_erXror_handling
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// processar uma calculadora
var operand1 = 10;
var operand2 = 2;
var operator = '+'; // +, -, *, /
var result;
switch (operator) {
  case '+':
    result = operand1 + operand2;
    break;
  case '-':
    result = operand1 - operand2;
    break;
  case '*':
    result = operand1 * operand2;
    break;
  case '/':
    result = operand1 / operand2;
    break;
  default:
    result = null;
}
console.log(result);

if (operator == '+'){
  result = operand1 + operand2;
}else if(operator == '-'){
  result = operand1 - operand2;
}else if(operator == '*'){
  result = operand1 * operand2;
}else if(operator == '/'){
  result = operand1 / operand2;
}
// console.log(result);

// Gerar uma sequência 1
// 0, 1, 2..., 99
var arr = [];
var i = 0;
while(i <= 99){
  // arr[i] = i;
  // arr.push(Number(i).toString());
  arr.push(i);
  i++;
}
console.log(arr.join(', '));

// Gerar uma sequência 2
// 0, 1, 2, 3..., 9
// 10, 11...
// ...
// 90, 91..., 99
var result = "";
for(let i = 0; i <= 99; i++){
  result += i;
  result += (i%10 == 9) ? '\n' : ', ';
}
console.log(result);

// Gerar a seq2 apenas com número pares

var result = "";
var i = 0;
do{
  if(i%2 ==0)
    result+=i +', ';
  i++;
}while(i<=100);
console.log(result);

// Gerar a seq2 na ordem inversa
var valor = "";
for(let i =99; i>=0; i--){
  if(i <10) valor+= 0;
  valor += i ;
  valor += (i%10 == 0) ? '\n' : ', ';
}
console.log(valor);

// *
// **
// ***
// ****
// ***
// **
// *
var result = "";
var character = "*";
var size = 4;
for(let i = 1; i <= (size*2-1); i++){
    repeated = (i > size)?size - (i-size):i;
    result += character.repeat(repeated) + "\n";
}
console.log(result);

// for..in
var variable = [1, 2, 3];
console.log(Object.keys(variable));
console.log(variable[0]);
console.log(variable['0']);
for(let index in variable){
  console.log(`${index} => ${variable[index]}`);
}
variable['mask'] = '192.168.0.1';
variable['ip'] = '255.255.255.0';
variable[3] = 4;
variable[4] = 5;
for(let index in variable){
  console.log(`${index} => ${variable[index]}`);
}

var object = {mask: '255.255.255.0', ip: '192.168.0.1'};
for(let index in object){
  console.log(`${index} => ${object[index]}`);
}

// for..of
var variable = [1, 2, 3];
for (let value of variable) {
  console.log(value);
}

var object = {mask: '255.255.255.0', ip: '192.168.0.1'};
var keys = Object.keys(object);
console.log(keys);
for(let index of keys.sort()){
  // if(index === 'mask') keys.push('autro_valor');
  console.log(`${index} => ${object[index]}`);
}
console.log(keys);

// http://ip-api.com/json/8.8.8.8
var ip = {
  as:"AS15169 Google Inc.",
  city:"Mountain View",
  country:"United States",
  countryCode:"US",
  isp:"Google",
  lat:37.386,
  lon:-122.0838,
  org:"Google",
  query:"8.8.8.8",
  region:"CA",
  regionName:"California",
  status:"success",
  timezone:"America/Los_Angeles",
  zip:"94035"
};
var table = "<table><thead><tr><th>Campo</th><th>Valor</th></tr></thead>";
