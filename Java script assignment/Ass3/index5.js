
//largest number using function declaration
var arr = [3, 45, 344, 23, 8, 12, 56, 10, 25, 18];

console.log('---------------------------------------');
console.log(' second largest number using Named Functions');
function largestnum(x) {
    var n = x.length;
    var temp = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < (n - i); j++) {
            if (x[j - 1] > x[j]) {
                temp = x[j - 1];
                x[j - 1] = x[j];
                x[j] = temp;
            }

        }
    }
    console.log('second largest number is  ',x[arr.length-2]);
}
largestnum(arr)
console.log('---------------------------------------');
console.log(' second largest number using Anonymous Function');


var largestnum1=function(x){
    var n = x.length;
    var temp = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < (n - i); j++) {
            if (x[j - 1] > x[j]) {
                temp = x[j - 1];
                x[j - 1] = x[j];
                x[j] = temp;
            }

        }
    }
    console.log('second largest number is  ',x[arr.length-2]);

}
largestnum1(arr)

console.log('---------------------------------------');
console.log(' second largest number using Arrow Functions ');

var largestnum2= x=>{
    var n = x.length;
    var temp = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < (n - i); j++) {
            if (x[j - 1] > x[j]) {
                temp = x[j - 1];
                x[j - 1] = x[j];
                x[j] = temp;
            }

        }
    }
    console.log('second largest number is  ',x[arr.length-2]);

}
largestnum2(arr)
console.log('---------------------------------------');
console.log(' second largest number using Self Invoked Function (IIFE)');

(function(x){
    var n = x.length;
    var temp = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < (n - i); j++) {
            if (x[j - 1] > x[j]) {
                temp = x[j - 1];
                x[j - 1] = x[j];
                x[j] = temp;
            }

        }
    }
    console.log('second largest number is  ',x[arr.length-2]);

}(arr))
console.log('---------------------------------------');

