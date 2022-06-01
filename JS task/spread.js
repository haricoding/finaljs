const person={
    firstname:'harish',
    lastname:'hg'
}
console.log(person);

let personcopy={...person}
console.log(personcopy);
let address={
    state:'karnataka',
    city:'bangalore'
}
let persondetails={...person,...address}
console.log(persondetails);

let personc={...person,age:20}
console.log(personc);
console.log(person);