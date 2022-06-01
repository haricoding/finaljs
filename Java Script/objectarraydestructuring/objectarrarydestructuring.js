const person = {
    firstName: 'Ajith',
    lastName: 'K',
    age:10,
    hobbies: ['Cricket', 'Singing'],
    address: {
        state: 'Karnataka',
        picode: '560038',
        city: 'Bangalore'
    }
}
// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age

// object Destructuring (ES6 feature)
const { firstName, lastName} = person
console.log('firstName', firstName);
console.log('lastName', lastName);

//multi level destructure
const{hobbies, address: {state, city}} = person
console.log('hobbies', hobbies);
console.log('state', state);
console.log('city', city);

//alias names
const {firstName: fname, lastName: lname} = person
console.log(fname);
console.log(lname);
function calculateTotalPrice({gst, price}){
    console.log('gst', gst);
    console.log('price', price);
    return price + (price *gst/100)
}
const product ={
    price: 100,
    gst: 3,
    productName: 'Bag',
    mfYear:2021,
    moreDetails: {
        brand: 'Wildcraft',
        color: 'blue'
    }
}
console.log(calculateTotalPrice(product)); 

console.log('-------array destructuring-----------');
const fruits = ['Apple','Pineapple','orange','Banana']

// const fruit1 = fruits[0]
// const fruit2 = fruits[1]

// Array Destructuring
const [fruit1,fruit2] = fruits
console.log(fruit1);
console.log(fruit2);

const [fruitone,,fruitthree] = fruits
console.log(fruitone);
console.log(fruitthree);