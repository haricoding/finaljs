// StringMethods
const str = 'hello'
//toUpperCase
str.toUpperCase()
const result = str.toUpperCase()
//because primitive types are immutable
console.log(str);
console.log(result);


// toLowercase
let greet = 'Good Afternoon'
greet = greet.toLowerCase()
console.log(greet);     //god afternoon

console.log(greet.charAt(13));
console.log(greet.indexOf('o',3));
const res = str.concat(',',greet,'all')
console.log(res);
const hasNoon = greet.includes('noon')
console.log('hasNoon', hasNoon);
const value = greet.replace('afternoon', 'night')
console.log(value);

const data = 'Hello all, Welcome to javascript session'
const extractedStr = data.substr(11,10)
console.log(extractedStr);
// End is not inclusive
const substrVal = data.substring(1,4)
console.log(substrVal);

const email = '           chandan.k@testyantra.com           '
console.log('email', email);
const emailAfterTrim = email.trim()
console.log('emailAfterTrim', emailAfterTrim);
const gmail = '            chandan.k@testyantra.com         '
console.log('start -', gmail.trimStart());

