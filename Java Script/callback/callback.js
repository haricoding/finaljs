
// function first(Callback){
//     setTimeout(()=>{
//         console.log('first executed');
//         Callback()
//     },0)
// }
// function second(){
//     console.log('second executed');
// }
// first(second)
// console.log('------------------');

// function add(sum){
//     console.log('im add fun');

//     console.log(sum + 2);
// }
  
//   function multiplyBy2(sum){
//     console.log('im multiply fun ');

//     console.log(sum * 2);
//   }

// function main (sum,call){
//     call(sum);
//     console.log('im main fun');

// }
// main(2,add);
// main(3,multiplyBy2);

function first(){
    console.log('first fun');
}
function second(){
    console.log('second fun');
}

first(second)