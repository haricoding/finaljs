function add(a,b){
    sum = a + b;
    console.log('sum is',sum);
}
add(20,30)

const named = function(a,b){
    return a+b;
   
}
console.log(named);
named(20,40)

console.log('------------------');
function isEligible(age){
    if(age>=18){
        //console.log('eligibe for voting');
        return true
    }
    else{
       // console.log('not eligible for voting');
        return false
    }
}
function eligibleOrNot(result){
    if (result === true){
        console.log('eligible');
    }
    else {
        console.log('not eligible');
    }
}
result = isEligible(22)
eligibleOrNot(result)
result2 = isEligible(78)
eligibleOrNot(result2)

console.log('---------------');

const findgoods = function(a,b){
    return a+b
}
const goodsVal = findgoods(10,20)
console.log(goodsVal);

console.log('----');
var findProduct = function(a, b){
    total = a*b
    console.log(total);
}
findProduct(10,20)
//console.log(findProduct);

console.log('-----------');
function bike(q,w){
    return q+w;
}
console.log(bike(2,8));

console.log('------');
(function(a,b){
    var diff = a+b;
    console.log('diff is' ,diff);
})(20,30)
console.log('-----------');
function greet(){
    return('hudo')
}
salutation = greet()
console.log(salutation);

console.log('-----------------');
function add(sum){
    console.log(sum + 2);
}
  
  function multiplyBy2(sum){
    console.log(sum * 2);
  }

function main (sum,operation){
    operation(sum);
}
main(2,add);
main(3,multiple);