async function harry(){
    console.log('inside');
    return 'harry'
}
console.log('before calling');
let a = harry()
console.log('after calling');
console.log(a);
console.log('last');