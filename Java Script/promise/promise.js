console.log('started');
new Promise(function(resolve, reject){
    if(10 < 4){
        resolve('sucess')
    } else {
        reject('error')
    }
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
console.log('Ended');