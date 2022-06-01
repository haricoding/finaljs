//factorial using function declaration
var x=5;


console.log('---------------------------------------');
console.log('factorialusing Named Functions');

function factorial(n){
    var res=1;
        if(n==1 || n==0) return 1;
        for(var i=1;i<=n;i++){
            res*=i;
        }
        return res;
}
console.log(factorial(x));
console.log('---------------------------------------');
console.log('factorial using Anonymous Function');

var factorial1=function(n){
    var res=1;
        if(n==1 || n==0) return 1;
        for(var i=1;i<=n;i++){
            res*=i;
        }
        return res;
}
console.log(factorial1(x));
console.log('---------------------------------------');
console.log('factorial using Arrow Functions ');

var factorial2= n=>{
    var res=1;
        if(n==1 || n==0) return 1;
        for(var i=1;i<=n;i++){
            res*=i;
        }
        return res;
}
console.log(factorial2(x));
console.log('---------------------------------------');
console.log('factorial using Self Invoked Function (IIFE)');

(function(n){
    var res=1;
        if(n==1 || n==0) return 1;
        for(var i=1;i<=n;i++){
            res*=i;
        }
        return console.log(res);;
}(x))
console.log('---------------------------------------');

