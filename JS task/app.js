arrr1 = [12,32,34,21,7,57,98]
large = arrr1[0]
for(let i=0;i<arrr1.length;i++){
    if(large<arrr1[i]){
        large=arrr1[i]
    }
}
console.log(large);


var largest2 = Math.max.apply(0, [21,34,02,45,10]);
console.log(largest2);

let array2 = [1,2,3,4,5,6];
let max = Math.max(...array2);
console.log(max);

function maxOfArray(array3) {
    return Math.max.apply(Math, array3);
  }
  
  
  let array3 = [1,2,3,4,5,6];
  console.log(maxOfArray(array3));

  console.log(Math.max(1,2,3,4,5,6));


  var numbers = [2,3,1];
 numbers.sort(function(a,b){return b-a});
 console.log("max number is", numbers[0]);

 //even and odd and store in array
 let nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];

 let evens=[]
 let odd=[]

 for(let i=0;i<nums.length;i++){
     if((nums[i]%2)==0){
         evens.push(nums[i])
     }else{
         odd.push(nums[i])
     }
 }
 console.log(evens);
 console.log(odd);

 function groupNumbers(arr) {

    var arr = [1,2,3,4,5,6,7,8,9,10];
  
    var evenNumbers = arr.filter(number => number % 2 == 0);
  
    console.log("Even numbers " + evenNumbers);
  
    var oddNumbers = arr.filter(number => number % 2 !== 0);
  
    console.log("Odd numbers " + oddNumbers);
  }
  
  groupNumbers();

  const arr = [24,42,543,676,456,535,555];
console.log("Values: "+arr);
var eveen = arr.filter((number)=>number%2 === 0);
console.log("Eveen Number: "+eveen);
var oddd = arr.filter((number)=>number % 2 !==0);
console.log("Oddd Number: "+oddd);