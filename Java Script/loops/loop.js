console.log('------------forofloop-------');
var numbers = [10,20,30,40]
// for of loop
for (var number of numbers){
    console.log(number);
}
console.log('------------');

var fruits = ['Apple','Mango','Orange','Banana','Pineapple']
for(var fruit of fruits){
    console.log(fruit);
}

console.log('----------forinloop with object---------------');

var person = {
    firstName : 'ajith',
    lastName : 'kumar',
    age: 56,
    gender:'male'

}
for(var key in person){
console.log(`${key} - ${person[key]}`); 

}
console.log('------forinloo with array-------');
for(var index in numbers){
    console.log(`value at index ${index}-${numbers[index]}`);
}

for (var i in fruits){
    console.log(fruits[i]);
}

console.log('-----------');
function test(){
    console.log('test func started');
    if(3<3){
        console.log(i);
    }else{
        /* Illegal break statement
            break statement can be used in loops or
            switch cases. It cannot be used in functions
            or if else statements without loops */
            //break; 
            console.log('break');
    }
    console.log('tet func ended');
}
test()
console.log('---------------------');
var arr = [10,20,30,40,50,,,,,,100]
console.log(arr);
for (var i=0;i<arr.length;i++){
    console.log(`${i} - ${arr[i]}`);
}
console.log('-------------------');
for (var index in arr){
    console.log(`${index} - ${arr[index]}`);
}
console.log('-----------');

var arrData = [10,20,30]
arrData[3] = 80
arrData['price'] = 700
console.log(arrData);
// ignores the elements which doesnot have index
for(var i=0;i<arrData.length;i++){
    console.log(`${i} - ${arrData[i]}`);
}

console.log('--------------');
//considers the elements which does not have the index
for (var i in arrData){
    console.log(`${i} - ${arrData[i]}`);
}

//assignment
 var pens = [
     {
         brand:'parker',
         color:'black',
         price : 125,
         type :'ball point pen'
     },
     {
        brand:'Reynolds',
        color:'blue',
        price : 10,
        type : 'ball point pen'
    },
    {
        brand:'Elkos',
        color:'red',
        price : 5,
        type : 'gel pen'
    }
 ]
 console.log('------------');
 // using for loop if price is > 5 print the object
 for(var i=0;i<pens.length;i++)
 {
     if (pens[i].price > 5){
         
         console.log(pens[i]);
     }
     
 }
console.log('----------');
 
 // for of loop ---> if type==='ball point pen'&& price >5
 for (var pen of pens){
     if(pen.price > 5 && pen.type === 'ball point pen'){
         console.log(pen);
     }
 }
console.log('----------');
 //for in loop > if brand length > 5 && price >10
 for(var index in pens)
 {
     if(pens[index].brand.length > 5 && pens[index].price > 10){
         console.log(pens[index]);
     }
 }