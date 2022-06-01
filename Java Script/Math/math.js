console.log('Math Object');

// To find min
var minVal = Math.min(12,32,45,10,85)
console.log('minVal- ',minVal);

//TO find out max
var maxVal = Math.max(78,90,780,589,657,1012,1098)
console.log('maxVal- ',maxVal);

//To find power
var powerVal = Math.pow(2,3)
console.log('power of 2,3- ',powerVal);

var powerVal = Math.pow(3,9)
console.log('power of 3,9- ',powerVal);
// usually random will give 0 to 1
var randomVal= Math.round(Math.random())
console.log('randomVal b/w 0 to 1 ',randomVal)

// *100 to generate more numbers
var randomVal= Math.round(Math.random()*100)
console.log('randomVal b/w 0 to 100 ',randomVal)

var randomVal= Math.ceil(Math.random()*100)
console.log('randomVal b/w 0 to 100 ',randomVal)

 
var names = ['kiran','suresh','varun','sriram','kumar']
var randomIndex = Math.floor(Math.random()*names.length)
console.log(names[randomIndex])
