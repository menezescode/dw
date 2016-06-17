// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// literal
// JSON - Javascript Object Notation
// http://json.org/
var ip = {
  address: "192.168.0.2",
  mask: "255.255.255.0"
}
console.log(ip);
console.log(ip.address);
console.log(ip.mask);
console.log(ip["address"]);
ip.version = "v6";
ip.gateway = {
  ip: "192.168.0.254",
  mask: "255.255.255.0"
};
console.log(ip);
console.log(ip.gateway.ip);
console.log(ip["gateway"]["ip"]);

var ip = {
  "address": "192.168.0.1",
  "mask": "255.255.255.0"
}
console.log(ip);

// objects are passed by references.
var ip_home = ip;
ip_home.version = "v6";
console.log(ip);

// clone
var a = {myProp: "value"};
var cloneOfA = JSON.parse(JSON.stringify(a));
cloneOfA.value = "value";
console.log(a);
console.log(cloneOfA);
var cloneOfA = Object.assign({}, a); // ES6
console.log(a);

// Web API / RestFull
// http://ip-api.com/docs/
// http://ip-api.com/docs/api:json
// http://ip-api.com/json/8.8.8.8
