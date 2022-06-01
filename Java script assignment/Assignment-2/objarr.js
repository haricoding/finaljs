// // objects
// // Without new keyword
// var laptop = {
//     companyName:'asus',
//     amount:45000,
//     ram:'8gb',
//     processor: 'corei3',
//     getNameCost: function(){
//         return this.companyName +''+this.amount
//     }
//   }
  
// var company = {
//     product:'car',
//     name:'maruthi',
//     country: 'india',
//     year: 1995,
//     mostPopularModel: 'swift',
//     getNameModel: function(){
//         return this.name +''+this.mostPopularModel
//     }
// }
// var india = {
//     noOfStates:29,
//     continent:'Asia',
//     economy:'agriculture',
//     priMinister:'narendramodi',
//     getNameEconomy: function(){
//         return this.priMinister +''+this.economy
//     }

// }
// var car = {
//     carCompany:'audi',
//     modelNo:'g9',
//     cost: 2500000,
//     color: 'red',
//     getNameCost: function(){
//         return this.carCompany +''+this.cost
//     }
// }
// var bike = {
//     bikeCompany:'bullet',
//     modelType:'350cc',
//     cost:250000,
//     color:'silver',
//     getNameCost: function(){
//         return this.bikeCompany +''+this.cost
//     }
// }

// //objects witn newkeyword
// var car = new Object()
// car.price = 400000
// car.model = maruthi
// car.name = swift
// car.color = red


// var bike = new Object()
// bike.company = bullet
// bike.modelType = 350
// bike.cost = 250000
// bike.color = silver

// var india = new Object()
// india.company = bullet
// india.modelType = 350
// india.cost = 250000
// india.color = silver

//console.log('---two example for each primitive type using tyyeof operator-----')
//// console.log('-----primitive types are string number boolean undefined null ------');

// console.log('----string----');

// var name1="tiger"
// console.log(typeof name1);

// var name2="hello world"
// console.log(typeof(name2));

// console.log('----number----');

// var age=45
// console.log(typeof age);
// var bikeMileage=28
// console.log(typeof bikeMileage);

// console.log('----boolean----');

// var isRaining=true
// console.log(typeof isRaining);

// var doYouSmoke=false
// console.log(typeof doYouSmoke);

// console.log('----undefined----');

// var inArelationShip;
// console.log(typeof inArelationShip);

// var rYOuHappy;
// console.log(typeof rYOuHappy);

// console.log('----null----');

// var life=null
// console.log(typeof life);

// var haveGf=null
// console.log(typeof haveGf);


// console.log('-----create 5 arrays without using new keyword with all primitive datatype and object and loop using forloop---');

// var myArray=['ayaz','pasha',34,true,undefined,null,{color:'black'},['black','blue','red']]

// console.log(myArray[0]);
// for(var i=0;i<myArray.length;i++)
// {
//     console.log(myArray[i]);
// }

// console.log(myArray[7][2]);


// console.log('--------2nd---------');

// var myArray1=['ayaz','pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

// console.log(myArray1[6]);
// for(var i=0;i<myArray1.length;i++)
// {
//     console.log(myArray1[i]);
// }

// console.log(myArray1[8][4]);


// console.log('--------3rd---------');

// var myArray2=[22,'pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

// console.log(myArray2[4]);
// for(var i=0;i<myArray2.length;i++)
// {
//     console.log(myArray2[i]);
// }

// console.log(myArray2[8][0]);


// console.log('--------4th---------');

// var myArray3=[22,'pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

// console.log(myArray3[3]);
// for(var i=0;i<myArray3.length;i++)
// {
//     console.log(myArray3[i]);
// }

// console.log(myArray3[7-1]);



// console.log('--------5th---------');

// var myArray4=['sunday','monday','pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

// console.log(myArray4[1]);
// for(var i=0;i<myArray4.length;i++)
// {
//     console.log(myArray4[i]);
// }

// console.log(myArray4[7+1]);


// console.log('----------sep 12 2020');


// var systemDate1=new Date('sep 12 2020')
// console.log(systemDate1);
// var monVal=systemDate1.getMonth()
// var dayValue=systemDate1.getDay()
// var yearValue=systemDate1.getFullYear()
// var dateValue=systemDate1.getDate()

// var months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
// var monthData=months[monVal]

// var weekdays=['sun','mon','tue','wed','thu','fri','sat'];
// var dayData=weekdays[dayValue]


// var formattedDate=`${dayData} ${monthData} ${dateValue} ${yearValue}`
// console.log(formattedDate);






console.log('---------create 5 objects without using new keyword with one function----------');

var mobile={
    name:'samsung',
    model:'s9 plus',
    price:'34000',
    color:'black',
    primaryCamera:'16mp',
    secondaryCamera:'32mp',
    totalCamera:function()
    {
        console.log(`${this.primaryCamera}+${this.secondaryCamera}`);
    }
}
mobile.totalCamera();
console.log(mobile.name);
console.log(mobile.price);
console.log(mobile.model);



console.log('----------2nd object------------');

var person={
    firstName:'Hari',
    lastName:'HG',
    age:28,
    eyeColor:'blue',
    weight:80,
    fullName:function(){
        console.log(`${this.firstName} ${this.lastName}`);
 
    }
}
person.fullName();
console.log(person.eyeColor);
console.log(person.lastName);


console.log('----------3rd object------------');

var restaurant={
    menu:'veg',
    items:'vegitable biryani',
    price:120,
    beverages:'lemon juice',
    beveragesPrice:50,
    totalbill:function()
    {
        var final=this.price+this.beveragesPrice;
        return final;
    }
}

console.log(`${restaurant.totalbill()}`);
console.log(restaurant.beverages);

console.log('----------4th object------------');

var emp={
    name:'hari',
    empId:789,
    salary:35000,
    pf:3000,
    incentive:2500,
    totalSalary:function()
    {
        var total=this.salary+this.incentive-this.pf;
        return this.salary
    }
}

console.log(`${emp.name} total salary=${emp.totalSalary()}`);
console.log(emp.incentive);


console.log('----------5th object------------');

var laptop={
    name:'hp',
    color:'grey',
    rom:'1tb',
    ram:'4gb',
    price:30000,
    specification:function(){
        console.log(`hp laptop with ${this.rom} rom and ${this.ram} ram is ${this.price}`);
    }
}
console.log(laptop.specification());


console.log('--------create 5 objects using new keyword with one functon---------');


var mobile1=new Object()

   mobile1.name='samsung',
   mobile1.model='s9 plus',
   mobile1.price='34000',
   mobile1.color='black',
   mobile1.primaryCamera='16mp',
   mobile1.secondaryCamera='32mp',
   mobile1.totalCamera=function()
    {
        console.log(`${this.primaryCamera}+${this.secondaryCamera}`);
    }
console.log(mobile1.totalCamera());
console.log(mobile1);


console.log('----------2nd object------------');

var person1=new Object()
person1.firstName='hari',
person1.lastName='hg',
person1.age=28,
person1.eyeColor='blue',
person1.weight=80,
person1.fullName=function(){
        console.log(`${this.firstName} ${this.lastName}`);
 
    }

person1.fullName();
console.log(person1.eyeColor);
console.log(person1.lastName);



console.log('----------3rd object------------');

var restaurant1=new Object()
restaurant1.menu='non veg',
restaurant1.items='chicken biryani',
restaurant1.price=180,
restaurant1.beverages='fanta',
restaurant1.beveragesPrice=50,
restaurant1.totalbill=function()
    {
        var final=this.price+this.beveragesPrice;
        return final;
    }


console.log(`${restaurant1.totalbill()}`);
console.log(restaurant1.beverages);

console.log('----------4th object------------');

var emp1=new Object()
emp1.name='ayaz',
emp1.empId=123,
emp1.salary=25000,
emp1.pf=2000,
emp1.incentive=4000,
emp1.totalSalary=function()
    {
        var total=this.salary+this.incentive-this.pf;
        return this.salary
    }


console.log(`${emp1.name} total salary=${emp1.totalSalary()}`);
console.log(emp1.incentive);


console.log('----------5th object------------');

var laptop1=new Object()
    laptop1.name='hp',
    laptop1.color='grey',
    laptop1.rom='1tb',
    laptop1.ram='4gb',
    laptop1.price=30000,
    laptop1.specification=function(){
        console.log(`hp laptop with ${this.rom} rom and ${this.ram} ram is ${this.price}`);
    }

console.log(laptop1.specification());


console.log('------two example for each primitive type using typeof operator------');

console.log('-----primitive types are string number boolean undefined null ------');

console.log('----string----');

var name1="tiger"
console.log(typeof name1);

var name2="hello world"
console.log(typeof(name2));

console.log('----number----');

var age=45
console.log(typeof age);

var bikeMileage=28
console.log(typeof bikeMileage);

console.log('----boolean----');

var isRaining=true
console.log(typeof isRaining);

var doYouSmoke=false
console.log(typeof doYouSmoke);

console.log('----undefined----');

var inArelationShip;
console.log(typeof inArelationShip);

var rYOuHappy;
console.log(typeof rYOuHappy);

console.log('----null----');

var life=null
console.log(typeof life);

var haveGf=null
console.log(typeof haveGf);


console.log('-----create 5 arrays without using new keyword with all primitive datatype and object and loop using forloop---');

var myArray=['ayaz','pasha',34,true,undefined,null,{color:'black'},['black','blue','red']]

console.log(myArray[0]);
for(var i=0;i<myArray.length;i++)
{
    console.log(myArray[i]);
}

console.log(myArray[7][2]);


console.log('--------2nd---------');

var myArray1=['ayaz','pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray1[6]);
for(var i=0;i<myArray1.length;i++)
{
    console.log(myArray1[i]);
}

console.log(myArray1[8][4]);


console.log('--------3rd---------');

var myArray2=[22,'pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray2[4]);
for(var i=0;i<myArray2.length;i++)
{
    console.log(myArray2[i]);
}

console.log(myArray2[8][0]);


console.log('--------4th---------');

var myArray3=[22,'pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray3[3]);
for(var i=0;i<myArray3.length;i++)
{
    console.log(myArray3[i]);
}

console.log(myArray3[7-1]);



console.log('--------5th---------');

var myArray4=['sunday','monday','pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray4[1]);
for(var i=0;i<myArray4.length;i++)
{
    console.log(myArray4[i]);
}

console.log(myArray4[7+1]);

console.log('---------array with new keyword---------');

var myArray11=new Array('ayaz','pasha',34,true,undefined,null,{color:'black'},['black','blue','red'])

console.log(myArray11[0]);
for(var i=0;i<myArray11.length;i++)
{
    console.log(myArray11[i]);
}

console.log(myArray11[7][2]);


// console.log('--------2nd---------');

var myArray12=['ayaz','pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray12[6]);
for(var i=0;i<myArray12.length;i++)
{
    console.log(myArray12[i]);
}

console.log(myArray12[8][4]);


console.log('--------3rd---------');

var myArray21=[22,'pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray21[4]);
for(var i=0;i<myArray21.length;i++)
{
    console.log(myArray21[i]);
}

console.log(myArray21[8][0]);


console.log('--------4th---------');

var myArray13=[22,'pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray13[3]);
for(var i=0;i<myArray13.length;i++)
{
    console.log(myArray13[i]);
}

console.log(myArray13[7-1]);



console.log('--------5th---------');

var myArray14=['sunday','monday','pasha',34,true,undefined,null,{color:'black'},{height:5},['black','blue','red']]

console.log(myArray14[1]);
for(var i=0;i<myArray14.length;i++)
{
    console.log(myArray14[i]);
}

console.log(myArray14[7+1]);


console.log('----------sep 12 2020');


var systemDate1=new Date('sep 12 2020')
console.log(systemDate1);
var monVal=systemDate1.getMonth()
var dayValue=systemDate1.getDay()
var yearValue=systemDate1.getFullYear()
var dateValue=systemDate1.getDate()

var months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
var monthData=months[monVal]

var weekdays=['sun','mon','tue','wed','thu','fri','sat'];
var dayData=weekdays[dayValue]


var formattedDate=`${dayData} ${monthData} ${dateValue} ${yearValue}`
console.log(formattedDate);

