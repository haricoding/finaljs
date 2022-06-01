

var str='hello welcome home'

console.log('---------------------------------------');
console.log('reverse string using Named Functions');

function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr(str));
console.log('---------------------------------------');
console.log('reverse string using Anonymous Function');

var reverseStr1=function(str){
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseStr1(str));
console.log('---------------------------------------');
console.log('reverse string using Arrow Functions ');

var reverseStr2= str=>{
    if (str === "")
    return "";
  else
    return reverseStr2(str.substr(1)) + str.charAt(0);
}
console.log(reverseStr2(str));
console.log('---------------------------------------');
console.log('reverse string using Self Invoked Function (IIFE)');

(function(str){
    return console.log(str.split("").reverse().join(""));
}(str))
console.log('---------------------------------------');












