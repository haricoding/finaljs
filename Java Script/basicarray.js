// array
var names = ['Puneeth', 'Darshan', 'Ajith', 'Shivrajkumar', 'Sudeep']
console.log(names);
console.log(names.length);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

console.log('-------------------------');
for (var i = 0; i < 5; i++) {
    console.log('hellololo')

}
console.log('-------------------------');
for (var i = 0; i < names.length; i++) {
    //debugger
    console.log(names[i])
}

console.log('-------------------------');

var myArray = ['ajay', 34, true, undefined, null, { color: 'black' }, ['black', 'blue', 'red']]
console.log(myArray[2]);            //true
console.log(myArray[4]);            //null
console.log(typeof (myArray[3]));    //undefined
console.log(myArray.length);        //7
console.log(myArray[5].length);     //undefined
console.log(myArray[5].color);      //black
console.log(myArray[5]['color']);      //black
console.log(myArray[5]['co lor']);      //undefined
console.log(myArray[6].length);         //3
console.log(myArray[6][0]);             //black
console.log(myArray[6][2 - 1]);           //blue

console.log('-------------------------');
var books = [
    {
        author: 'chetahan bhagath',
        title: 'two states',
        price: 80,
        publisher: 'sapna',
        noofpages: 265
    },
    {
        author: 'paulo cohello',
        title: 'Alchemist',
        price: 200,
        publisher: 'Harper Torch',
        noofpages: 250
    },
    {
        author: 'poornachandra tejaswi',
        title: 'chidambara rahasya',
        price: 340,
        publisher: 'sahitya bhandra',
        noofpages: 500
    }
]
for (var i = 0; i < books.length; i++) {
    console.log(books[i])
}

console.log('----------------------------------------------------------------')
// declaring arrary and object using new keyword
var arr = new Array(10)
console.log(arr.length);
console.log(arr[0]);

console.log('----------------------------------------------------------------')
var numbers = new Array(20, 30)
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);
numbers[2] = 67
console.log(numbers[2]);

console.log('------------------------------------')

var colors = new Array('blue')
console.log(colors.length);
console.log(colors[0]);

// alt+shift+length