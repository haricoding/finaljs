// Named functions
function add(num1, num2){
    var sum = num1 + num2
    console.log('sum- ', sum)
}
add(10,20)

function findIsEligibleForVoting (age){
    if(age>18){
        return true
    }
    else{
        return false
    }
}
function printEligibleOrNot (result){
    if(result === true){
        console.log('eligible for voting')
    }{
        console.log('Not eligible for voting')
    }
}

var result = findIsEligibleForVoting(30)
printEligibleOrNot(result)

var result1 = findIsEligibleForVoting(15)
printEligibleOrNot(result)

//Anonymous function
var findProduct = function(a, b){
    return a*b
}
console.log(findProduct)
var productVal = findProduct(12,3)
console.log('product- ',productVal);

var person = {
    testFunc : function() {
        console.log('test func executed');
    },
    testFunc2 : function() {
        console.log('test func2 executed');
    }
}
person.testFunc()
person.testFunc2()

// // Self invoked functions
// (function(a,b){
//     var diff = b-a
//     console.log('Difference- ', diff);
// })(20,30);

// Arrow Functions(ES^ Features)
console.log('---------Arrow Functions--------');
var greet = () => {
    console.log('greet function');
    console.log('welcom');
}
greet()

var squareOfNumber = num=>num*num
var result = squareOfNumber(2)
console.log('Result', result);
console.log(squareOfNumber(3));

var calculateTotalPrice = (price,gstper) => {
    var totalprice = (price*gstper/100)+ price
    return totalprice
}
var priceVal = calculateTotalPrice(300, 18)
console.log(priceVal);