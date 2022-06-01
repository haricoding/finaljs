//Functio / method(we should learn like this when we learn functions )
//1.Parameters
//2.what it returns
//3.functionality of the function/method

var hobbies = ['sleeping','coding','treking','birds watching']
console.log('-------push method------');
var hobbieslength = hobbies.push('Reading');
console.log('hobbies after push -',hobbies);
console.log('hobbies length',hobbieslength);
console.log('hobbies', hobbies.push('cooking'));

console.log(hobbies);

console.log('----------pop----------');
var deletedElement = hobbies.pop()
console.log('hobbies after pop', hobbies);
console.log('deletedElement', deletedElement);

console.log('-------------foreach----------');
hobbies.forEach(function(value,index,arr){
    console.log(`${index}- ${value}`);
})

console.log('-----------unshift----');
//add element at the start of the index
const lenofHobbies = hobbies.unshift('gaming')
console.log('hobbies after unshift', hobbies);
console.log('hobbies length after unshift', lenofHobbies);

console.log('----------shift-----');
//Removes the element at the start of the array
const deletedHobby = hobbies.shift()
console.log('hobbies after shift', hobbies);
console.log('deleted hobby after shift ', deletedHobby);

console.log('---------------------');
//isArrary returns true if it is a array otherwise gives false
const isHobbiesArray = Array.isArray(hobbies)
console.log('isHobbiesArray ', isHobbiesArray);

console.log('-------------------------');
console.log(hobbies);
//Checks wheather element is present or not
//if present returns true else returns false
const iscodingPresent = hobbies.includes('coding')
console.log('isCodingPresent' , iscodingPresent);

//Checks wheather element is present or not
//if present returns the index of element else returns -1
const indexOfReading = hobbies.includes('Reading')
console.log('Index of Reading' , indexOfReading);

// console.log('---------Spread Operator----------');
// const mobile = {
//     price: 9000,
//     brand: 'MI'
// }

// // Taking copy of mobile (Address will be copied)
// const mobileCopy = mobile

// //spread operator  (...) ES6
// //shallow copy(First level of properties will be copied)
// const mobileCopy = {...mobile}
// mobileCopyNew.price = 40000
// console.log(mobileCopyNew.price);       //40000
// console.log(mobile.price);              //9000
// console.log(mobileCopy.price);          //9000
// console.log('-------------------------');
// mobile.brand = 'Samsung'
// console.log(mobile.brand);              //samsung
// console.log(mobileCopy.brand);          //samsung
// console.log(mobileCopyNew.brand);       // MI

console.log('-----------------------------');
const movie = {
    movieName : 'spiderman no way home',
    director : 'john watts',
    actor : 'Tom holland',
    moreDetails : {
        budget : '200 million USD',
        heroine : 'Zendya',
        villain : 'Goblin',
    }
}

// Deep Copy
// taking multiple level copy using spread operator
const movieCopy = {
    ...movie,
    moreDetails : {...movie.moreDetails}
}
movie.director = 'upendra'
console.log(movie.director);     // upendra
console.log(movieCopy.director);  // john watts
console.log('--------------------------------------');
movie.moreDetails.heroine = 'Ramya'
console.log(movie.moreDetails.heroine);     //Ramya
console.log(movieCopy.moreDetails.heroine);  //Zendya
console.log('--------------------------------------');
const bike = {
    price: 70000,
    brand: 'bajaj',
    bikeNAme: 'pulsar',
    engineDetails : {
        cc : '200cc',
        stroke : '4 stroke'
    }
}
// deep copy of an object/array
//all the levels of object/array will be copied
//i.e., new object/array will be created
const bikeDeepCopy = JSON.parse(JSON.stringify(bike))
bike.engineDetails.cc = '250cc'
console.log(bike.engineDetails.cc);     //250cc
console.log(bikeDeepCopy.engineDetails.cc);     //250cc
console.log('-----------------------------');
const myObj = {
    firstName : 'Chandan'
}
const myObj1 = {
    lastName : 'k'

}
// merge two objects using spread operator
const myObj2 = {
    ...myObj,
    ...myObj1
}
console.log(myObj2);

console.log('-----------------------------');

// splice method
const numbers = [10,20,30,40,50]
const deletedElements = numbers.splice(2, 2,60,70,80)
console.log('deletedElements',deletedElements); //30,40
console.log('numbers ', numbers);  // 10,20,60,70,80,50
console.log('--------------------------');

//if we want to only add elements without deleting
// pass delete count as 0(second parameter)
const deletedElements1 = numbers.splice(1,0,100,110)
console.log('deletedElements1', deletedElements);
console.log('numbers ', numbers);

console.log('-----------------------------');


// Slice method
const nums = [10,20,30,40,50]
const deletedNums = nums.slice(1,3)
console.log('deletedNums', deletedNums)  //20,30
console.log('nums', nums);   // 10,20,30,40,50

//shallow copy of array
const numsCopy = nums.slice(0)
console.log('numsCopy', numsCopy);  //10,20,30,40,50
console.log('nums', nums);      //10,20,30,40,50
nums[0] = 1000
console.log(nums[0]);       //100
console.log(numsCopy[0]);       //10

const n = [10,20]
// copy (adsress is copied)
// changing n will also change n1
const n1 = n
n[0] = 90
console.log(n[0]);      //90
console.log(n1[0]);    //90
console.log('---------------spread operator-------');
const movies = ['spiderman','Batman','Antman','Ironman']
// Shallow copy using spread operator for array
const moviesCopy = [...movies]
movies[0] = 'Shaktiman'
console.log(movies[0]);     //shaktiman
console.log(moviesCopy[0]); //Spiderman


console.log('-------MAP method----------------');
const numsArr = [100,200,300,400,500]
//  const numsArrCopy = []
//  for (let i=0;i<numsArr.length;i++){
//      numsArrCopy.push(numsArr[i]+10)
//  }
//  console.log(numsArrCopy);

 const newNumsArr = numsArr.map((value,index,arr) => {
     return value+10
 })
 console.log(numsArr);
 console.log(newNumsArr);

 console.log('--------------------------Filter--------------------------------');
 const ageArr = [45,56,9,98,67]
 const filteredAges = ageArr.filter((value) =>{
 if(value>=18){
     return true
 } else {
     return false
 }
 })
 console.log(ageArr);
 console.log(filteredAges);
// we can write in above example in another way
//{} is not required when code is one line
// return keyword is also not required for single line code
 const filteredAge = ageArr.filter((value) =>{
     return value>=18
 })
 //const filterdAge = ageArr.filter((value) => value >=18)
 console.log(filteredAge);
 
 console.log('------------------------------------------');
 const books = [
     {
         title: 'Harry Potter',
         price : 90,
         author : 'J K Rowling'
     },
     {
        title: 'Indian Constitution',
        price : 720,
        author : 'Lakshmi_Kanth'
     },
     {
        title: 'Wings Of Fire',
        price : 150,
        author : 'Apj Abdul Kalam'

     }
 ]
 const booksWithGst = books.map(book=>{
     book.price = book.price*0.18 + book.price
     return book
 })
console.log(booksWithGst);      

console.log('-----deep copy using spread operator----------');
const booksWithGstDeepCopy = books.map(book =>{
    const b ={...book}
    b.price = b.price*0.18 + b.price
    return b})

    console.log(booksWithGstDeepCopy);
    console.log(books);

    console.log('----------------------------');
    const products = [
        {
            productName: 'Lipstick',
            price: 999,
            brand: 'Maybeline'
        },
        {
            productName: 'eyeLiner',
            price: 500,
            brand: 'Lakme'   
        },
        {
            productName: 'trimmer',
            price: 1000,
            brand: 'Philips'   
        },
        {
            productName: 'beardo oil',
            price: 260,
            brand: 'Beardo'   
        }
    ]
    const productsWithGst = products.map(product => {
        const productCopy = {...product}
        productCopy.price = productCopy.price*0.03 + productCopy.price
        return productCopy
    })
    console.log(productsWithGst);
    console.log(products);

    console.log('----Filter the products where price > 500--------');
    const filteredProducts = products.filter((products)=>{
        
        
        return products.price > 500;
    })
    console.log(filteredProducts);

    console.log('---------------------');
    //reference copy
    // const booksCopy = books
    // console.log(books===booksCopy);  true

    // const booksCopy = [...books]
    // console.log(books===booksCopy); false
    // console.log(books[0]===booksCopy);      true

    // books[0].price = 100
    // console.log(book[0].price);     //100
    // console.log(booksCopy[0].price);        //100

    // const booksCopy = books.map(book=>{
    //     return{...book}
    // })
    // console.log(booksCopy);
    // console.log(books[0]===booksCopy[0]);      //false
    // books[0].price = 100
    // console.log(books[0].price);       //100
    // console.log(booksCopy[0].price);    //90

    console.log('-----------------join method----');
    const myArr = [100,200,300,400,500]
    const str = myArr.join('-')
    console.log('str', str);
    console.log(myArr);
    

    const fruits = ['apple', 'pineapple', 'Custard Apple', 'Greenapple']
    const fruitStr = fruits.join(',')
    console.log('fruitStr', fruitStr);
