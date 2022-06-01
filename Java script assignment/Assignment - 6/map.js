const numsArr = [100,200,300,400,500]
//  const numsArrCopy = []
//  for (let i=0;i<numsArr.length;i++){
//      numsArrCopy.push(numsArr[i]+10)
//  }
//  console.log(numsArrCopy);

 const newNumsArr = numsArr.map((value,index,arr) => {
     return value+10
 })
 console.log(numsArr);
 console.log(newNumsArr);

 console.log('-------------------------------------');

 const mystr = [2,3,33,55,66,776,34,865]
 const newmystr = mystr.map((value,index,arr) => {
     return value+15
     //return value%2===0;
 })
console.log(mystr);
console.log(newmystr);