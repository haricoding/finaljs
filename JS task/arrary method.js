// for each

var hobbies = ['sleeping','coding','treking','birds watching']
hobbies.forEach(function(ele,ind,arr){
    console.log(`${ind}-${ele}`);
})

//map method
const numsarr=[100,200,300,400,500]
// const newnumsarr=[]
// for(let i=0;i<numsarr.length;i++){
//     newnumsarr.push(numsarr[i]+10)
// }
// console.log(newnumsarr);

 const newnumsarr = numsarr.map((ele,ind,arr)=>{
     return ele+10
 })
 console.log(newnumsarr);

 //filter
 const age=[43,24,51,13,18,21,7,98,34]
 const validage = age.filter((val)=>{
     return val>18
 })
 console.log(validage);

 
 // reduce method
 let a = [2,44,33,13,56,87]
 console.log(a);
 let res = a.reduce(function(init,cur,ind){
    return init+cur
 })
 console.log(res);

 // sort method
 let numbers = [2,44,33,13,56,87]
 console.log(numbers.sort((a,b)=>{
     return -(a-b)
 }));

 console.log('-----------------join method----');
    const myArr = [100,200,300,400,500]
    const str = myArr.join('-')
    console.log('str', str);
    console.log(myArr);
    

    const fruits = ['apple', 'pineapple', 'Custard Apple', 'Greenapple']
    const fruitStr = fruits.join(',')
    console.log('fruitStr', fruitStr);
