console.log('Program Started');
let age = 80
const validAgePromise = new Promise((resolve,reject)=>{
if (age >= 18) {
    resolve('Eligible for voting')
} else {
    reject('Not eligible for voting')
}
})
validAgePromise.then((success)=>{
    console.log(success);
}).catch(err => {
    console.log(err);
});
console.log('program ended');
