
/// File name defines primitive/reference data type
let a = 20;
console.log(a);  //20
a = 30 
console.log(a);  //30

let b = 100
console.log(b);  //100
a=b
console.log(a);  //100
console.log(b);   //100
b = 200
console.log(b);   //200
console.log(a);   //100
console.log('-------------------');

const person = {
    firstName : 'ajay',
    lastName : 'k'
}
console.log(person.firstName);   //Ajay
const personCopy = person
console.log(personCopy.firstName);  //Ajay

personCopy.firstName = 'Sujeet'
console.log(personCopy.firstName);   //Sujeet
console.log(person.firstName);      //Sujeet

const personCopyNew = personCopy
personCopyNew.firstName = 'Guru'
console.log(person.firstName);
console.log(personCopy.firstName);
console.log(personCopyNew.firstName);

const val = 20
const val1 = 20
// compares the value
console.log(val===val1);        //true
//compares the adress of the object
console.log(person === personCopy);  //true

const car = {
    carBrand : 'jaguar',
    moreDetails :{
        price: 10000000
    }
}

const car1 = {
    carBrand : 'jagur',
}

car1.moreDetails = car.moreDetails

//never ever compare the objects using strict equal to
//because it compares the adress, does not compares the data.

console.log(car === car1);   //false
console.log('-------------------');
console.log(car.moreDetails === car1.moreDetails);   //true

// 