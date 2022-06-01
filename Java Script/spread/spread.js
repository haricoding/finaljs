const person = {
    firstName : 'Ajith',
    lastName : 'k'
}
// spread operator uses (ES6 features)
// 1. shallow copy or deep copy
// 2. copy properties of one object/array to another object/array
// 3. combine/merge two or more objects or two or more arrays
// 4. Add new properties and take copy
// 5. change any property and take copy
const personCopy = {...person}
const address = {
    pincode:560058,
    state:'Karnataka',
    city:'Bangalore'
}
const personDetails = {...person,...address}
console.log(personDetails);
const personC = {...person, age:14}
console.log(personC);
const personD = {...person,lastName:'I'}
console.log(personD);

