console.log('-----Foreach-------');

let a = [2,44,23,45,78,99];
console.log(a);
let res = a.forEach(function(ele,ind,arr)
{
    console.log(`${ind}- ${ele}`);
    
})

var hobbies = ['sleeping','coding','treking','birds watching']
console.log('-------push method------');
var hobbieslength = hobbies.push('Reading');
console.log('hobbies after push -',hobbies);
console.log('hobbies length',hobbieslength);
console.log('hobbies', hobbies.push('cooking'));

console.log(hobbies);