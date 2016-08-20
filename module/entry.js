var a = require('./a');
var b = require('./b');
var c = require('./c');
var d = require('./c/d');

console.log('Entry');
console.log(a);
console.log(b());
console.log(c);
console.log(d);
