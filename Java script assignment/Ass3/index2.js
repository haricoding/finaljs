//prime or not using function declaration
var x=13;


console.log('---------------------------------------');
console.log('prime or not using Named Functions');

function prime(n){
    if(n<=1) return 'Not a prime number';
        for(var i=2;i<=n/2;i++){
            if(n%i==0) return 'Not a prime number';
        }
        return 'Prime number';
}
console.log(prime(x));
console.log('---------------------------------------');
console.log('prime or not using Anonymous Function');

var prime1=function(n){
    if(n<=1) return 'Not a prime number';
        for(var i=2;i<=n/2;i++){
            if(n%i==0) return 'Not a prime number';
        }
        return 'Prime number';
}
console.log(prime1(x));
console.log('---------------------------------------');
console.log('prime or not using Arrow Functions ');

var prime2= n=>{
    if(n<=1) return 'Not a prime number';
        for(var i=2;i<=n/2;i++){
            if(n%i==0) return 'Not a prime number';
        }
        return 'Prime number';
}
console.log(prime2(x));
console.log('---------------------------------------');
console.log('prime or not using Self Invoked Function (IIFE)');

(function(n){
    if(n<=1) return console.log('Not a prime number');
        for(var i=2;i<=n/2;i++){
            if(n%i==0) return console.log('Not a prime number');
        }
        return console.log('Prime number');
}(x))
console.log('---------------------------------------');










