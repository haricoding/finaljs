
//bubblesort using function declaration
var arr = [3, 45, 344, 23, 8, 12, 56, 10, 25, 18];

console.log('bubble sort using Named Functions');
console.log('---------------------------------------');
function bubblesort(x) {
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
    for(var arr of x) console.log(arr);
}
bubblesort(arr)
console.log('---------------------------------------');
console.log('bubble sort using Anonymous Function');


var bubblesort1=function(x){
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
    for(var arr of x) console.log(arr);
}
bubblesort1(arr)

console.log('---------------------------------------');
console.log('bubble sort using Arrow Functions ');

var bubblesort2= x=>{
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
    for(var arr of x) console.log(arr);
}
bubblesort2(arr)
console.log('---------------------------------------');
console.log('bubble sort using Self Invoked Function (IIFE)');

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
    for(var arr of x) console.log(arr);
}(arr))
console.log('---------------------------------------');

