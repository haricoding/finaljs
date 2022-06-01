console.log('App file')
var person = {
    firstName: 'Allu arjun',
    lastName: 'Arvind',
    age: 38,
    gender: 'male',
    isMarried: true,
    getFullName: function(){
        return this.firstName +''+this.lastName
    }
}

console.log('person', person);
var fName = person.firstName
console.log('firstName -', fName);
var lName = person.lastName
console.log('lastName -', lName);
var pAge = person.age
console.log('Age -', pAge);
var pGender = person.gender
console.log('gender -', pGender);
var pIsMarried = person.isMarried
console.log('isMarried -', pIsMarried);
var fullName =(
     person.getFullName())
console.log('fullName =', fullName)

console.log(person['getFullName']())

console.log('------------------------------------------------------------------')

var marker = {
    color: 'black',
    height: '10cm',
    'pri ce': 25
}
// Another way of accessing the properties of the objects
console.log(marker['pri ce']);
console.log(marker['height'])

console.log('----------------------------------------')
var car = new Object()
car.price = 4000000
car.model = 2021
car.brand = 'toyata'
car.name = 'Fortuner'
car.color = 'pink'
console.log(car)
console.log(car.price)
console.log(car.model)
console.log(car.brand)
console.log(car.name)
console.log(car.color)

