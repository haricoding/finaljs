// globel level this is equal to window object
console.log(this);
console.log(window);
console.log(this===window);

console.log('---------------------------');
const person ={
    firstName: 'Ajit',
    lastName: 'k',
    getFullName: function () {
        //this is person object
        console.log('this inside getFullName -', this);
        return this.firstName+' '+this.lastName
    }
}

person.getFullName()

function greet(){
    //this is equal to window object
    // all the global properties and functions
    // belong to window object
    //(greet will be invoked using window reference)
    console.log('this inside greet- ', this);
    console.log('greet func');

}
window.greet()
greet()
console.log('---------------------------------------');
const myObj = {
    getData: function () {
        function test(){
            // thi is equal to window object
            //because test() is not invoked by
            // any object reference
            console.log('this inside test func', this);
            console.log('test func');
        }
        test()
        return 100
    }
}
myObj.getData()

console.log('-------------------------------');
// To overcome the above problem that is due to the test() is not invoked 
// it is giving it as window function ,below method is used
//using arrow function.
const myObj1 = {
    firstName:'Vijay',
    lastName:'S',
    getResult : () =>{
        //this inside getREsult - window
        //refers to its parent context
        console.log('getResult', this);
    },
    getName: function(){
        const test = () =>{
            //arrow functions will not have is own 
            //this. this refer to its parent
            // execution context
            console.log('this inside test', this);
            console.log('test func');
        }
        test()
        return `${this.firstName} ${this.lastName}`
    }
}
myObj1.getName()
myObj1.getResult()


console.log('-----------------------');

/*
1. This is global - window
2. This is named function which is declared in
    global level - window
3. This is named function which is invoked using
    object reference - current object
4. This is arrow function which is invoked using
    object reference - parent context object
5. A named function declared inside a function 
    which is invoked using object reference - window object
6. An arrow function declared inside a function 
    which i invoked using object reference - parent context object
*/

