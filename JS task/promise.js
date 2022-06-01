// let a=20

// let check= new Promise((resolve,reject)=>{
//     if(a<10){
//         resolve('sucess')
//     }else{
//         reject('err')
//     }
// }).then((suc)=>{
//     console.log(suc);
// }).catch((err)=>{
//     console.log(err);
// })

// //promise chaining using settime out
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// })

// p.then((result) => {
//     console.log(result); // 10
//     return result * 3;
// })

// p.then((result) => {
//     console.log(result); // 10
//     return result * 4;
// });

// //promise.all
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('first promise is resolved');
//         resolve(10)
//     },2*100)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('second promise is resolved');
//         resolve(20)
//     }, 3*100)
// })
// Promise.all([p1,p2])
// .then(result=>{
//     console.log(result);
// })

//Promise.race

let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        console.log('first promies settled');
        resolve(10)
    },1*100)
})
let p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
        console.log('second promise settled');
    },2*100)
})
 Promise.race([p3,p4])
 .then(resolve=>{
     console.log(resolve);
 })