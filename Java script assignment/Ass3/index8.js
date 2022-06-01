//fibonacci  using function declaration
var totoalLength = 10;


console.log('---------------------------------------');
console.log('fibonacci using Named Functions');

function fibonacci (n) {
    var a = 0;
    var b = 1;
    var c = 0;
    var temp = 2;
    for (var i = 0; i <= n; i++) {
        c = a + b;
        console.log(a);
        a = b;
        b = c;
    }
}
fibonacci (totoalLength)
console.log('---------------------------------------');
console.log('fibonacci using Anonymous Function');

var fibonacci1 = function (n) {
    var a = 0;
    var b = 1;
    var c = 0;
    var temp = 2;
    for (var i = 0; i <= n; i++) {
        c = a + b;
        console.log(a);
        a = b;
        b = c;
    }
}
fibonacci1(totoalLength)
console.log('---------------------------------------');
console.log('fibonacci using Arrow Functions ');

var fibonacci2 = n => {
    var a = 0;
    var b = 1;
    var c = 0;
    var temp = 2;
    for (var i = 0; i <= n; i++) {
        c = a + b;
        console.log(a);
        a = b;
        b = c;
    }
}
fibonacci2(totoalLength)
console.log('---------------------------------------');
console.log('fibonacci using Self Invoked Function (IIFE)');

(function (n) {
    var a = 0;
    var b = 1;
    var c = 0;
    var temp = 2;
    for (var i = 0; i <= n; i++) {
        c = a + b;
        console.log(a);
        a = b;
        b = c;
    }
}(totoalLength))
console.log('---------------------------------------');

