
console.log('Arrays');
console.log('----------------');

var num=[10,334,35,343]
//for loop 
for(var i=0;i<num.length;i++) console.log(num[i]);
console.log('----------------');
// for of 
for(var number of num) console.log(number);
console.log('----------------');
//for in 
for(var number in num) console.log(`${num[number]}`);
console.log('----------------');

var fruits=['apple','mango','white apple','papaya','grapes']
//for
for(var i=0;i<fruits.length;i++) console.log(fruits[i]);
console.log('----------------');
//for of
for(var fruit of fruits) console.log(fruit);
//for in
console.log('----------------');
for(var fruit in fruits) console.log(`${fruits[fruit]}`);
console.log('----------------');


var balls=['tennis','cark','pepsi']
//for
for(var i=0;i<balls.length;i++) console.log(balls[i]);
console.log('----------------');
//for of
for(var ball of balls) console.log(ball);
//for in
console.log('----------------');
for(var ball in balls) console.log(`${balls[ball]}`);
console.log('----------------');

console.log('Object');
console.log('----------------');

var film={
    firstWord: 'money',
    lastWord: 'heist',
    releaseDate: 2017,
    mostLiked: true
}
//for
for(var i=0;i<film.length;i++) console.log(film[i]);
console.log('----------------');

//for in
for(var key in film) console.log(film[key]);
console.log('----------------');
var pen={
    brand:'Nataraj',
    color:'red',
    price:25,
    type:'ball point pen' 
}

//for
for(var i=0;i<pen.length;i++) console.log(pen[i]);
console.log('----------------');

//for in
for(var key in pen) console.log(pen[key]);
console.log('----------------');
var film1={
    firstWord: 'stranger',
    lastWord: 'things',
    releaseDate: 2018,
    mostLiked: true
}
//for
for(var i=0;i<film1.length;i++) console.log(film1[i]);
console.log('----------------');

//for in
for(var key in film1) console.log(film1[key]);
console.log('----------------');

