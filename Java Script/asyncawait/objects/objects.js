const obj1 = {fname:'john',lname:'cena',age:20, fromwhere:{town:'amp'}}
// to get values
let val=Object.values(obj1)
console.log(val);

//to get keys

let keyyy=Object.keys(obj1)
console.log(keyyy);

// to add a property to obj1
obj1.job='software developer'
obj1.salary=21000
console.log(obj1);

// to delete a property 

delete obj1.salary
console.log(obj1);

//create using new keyword
const person = new Object()
person.city='bangalore'
console.log(person);

// objects can also have methods

obj1.fullname= function(){
    return this.fname+" "+this.lname;
};
console.log(obj1.fullname());

// assign method

//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object.
//Properties in the target object are overwritten by properties in the sources if they have the same key.
// Later sources' properties overwrite earlier ones.

const target={a:1,b:4,c:9}
const source={b:7,d:8}
const returnedtarged = Object.assign(target,source)
console.log(target);

//The Object.create() method creates a new object,
// using an existing object as the prototype of the newly created object.
const person1 = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person1);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  console.log(Object.values(person1))