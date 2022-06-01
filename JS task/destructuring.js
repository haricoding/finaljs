let person = {
    firstname:'harish',
    lastname:'hg',
    address:{
        state:'ap',
        pincode:1234
    },
    hobbies:['cricket','swim']
}
let {firstname,lastname,address:{state,pincode}}=person
console.log(firstname);
console.log(state);

// alias name
let {firstname:fname,lastname:lname}=person
console.log(fname);

//array destru
// we use comma(,) to skip
let colour = ['red','yellow','green','blue','white']
let [r,y,g,,w] = colour
console.log(y);