// // // the hello world program
// // // alert("Hello, World!");

// // // the hello world program
// // // document.write('Hello, World!');

// // // the hello world program
// // // document.write('Hello, World!');

// // // store input numbers
// // const num1 = parseInt(prompt('Enter the first number '));
// // const num2 = parseInt(prompt('Enter the second number '));

// // //add two numbers
// // const sum = num1 + num2;

// // // display the sum
// // console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// // take the input from the user
// const number = prompt('Enter the number: ');

// const result = Math.sqrt(number);
// console.log(`The square root of ${number} is ${result}`);
// console.log('first line');
// new Promise(function (resolve, reject) {
//     if (10 < 12) {
//         resolve('sucess')
//     }
//     else {
//         reject('err')
//     }
// }).then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// })
// console.log('last line');

// console.log('--------------');
//  const age = 60
// validtime = new Promise(function(resolve,reject){
//     if (age < 18){
//         resolve('Eligible for voting')
//     }else{
//         reject('Not eligible for voting')
//     } 
// })
// validtime.then(function(correct){
//     console.log(correct);
// }).catch(function(nott){
//     console.log(nott);
// })
console.log('--------------------');
console.log('program started');
// let age=0
function agePromise(){
    return new Promise(function(resolve,reject){
        if (age >= 18){
            resolve('eligible for voting')
        }
        else{
            reject('Not eligible for voting')
        }
    })
}
function validateAge(){
   age = document.getElementById('age').value
   agePromise().then(function(sucess){
       console.log(sucess);
   }).catch(function(error){
       console.log(error);
   })
}



