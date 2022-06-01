const jsObject = {
    firstName: "Ajay",
    lastName: "k",
    age: 17,
    isAdult: false,
    hobbies: ["Cricket", "Singing"],
    address: {
        pincode: 560058,
        state: "Karnataka",
        city: "Bangalore",
    }
}
console.log('javascript to JSON');
const stringifiedJSON = JSON.stringify(jsObject)

console.log(stringifiedJSON);
console.log(typeof stringifiedJSON);

console.log('JSON to javascript');

const javascriptObject = JSON.parse(stringifiedJSON)
console.log(javascriptObject);