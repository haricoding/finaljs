 
  var students = [
    {
      firstName: "Dhanush",
      branch: "Bio chemistry",
      YOP: 2015,
      loc: "Mysore",
    },
    {
      firstName: "Sandya",
      branch: "Civil",
      YOP: 2020,
      loc: "Banglore",
    },
    {
      firstName: "Puneetha",
      branch: "BBM",
      YOP: 2019,
      loc: "Mysore",
    },
  ];
  
  for (i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
  console.log(students[0].branch);
  console.log(students[1].branch);
  console.log(students[2].branch);
  console.log(students[0].YOP);
  console.log(students[1].YOP);
  console.log(students[2].YOP);
  
  for (const student of students) {
    console.log(student.firstName);
    console.log(student.branch);
    console.log(student.loc);
  }
  
  for (const key in students) {
    {
      const element = students[key];
      console.log(element);
    }
  }

  console.log("---------------Named function------------------");

  function bobbleSort(arr)
  {
      for(var i=0;i<=arr.length;i++)
      {
          for(var j=i;j<=arr.length;j++)
          {
              if(arr[i]>=arr[j])
              {
                  var temp=arr[i];
                  arr[i]=arr[j];
                  arr[j]=temp;
            }
          }
      }
      console.log("array in assending oder",arr);
  }
  var arr=[10,30,70,80,50,40]
  bobbleSort(arr);
  
  
  
  
  console.log("---------------annonymus function------------------");
  
  var bobbleSort=function(arr)
  {
      for(var i=0;i<=arr.length;i++)
      {
          for(var j=i;j<=arr.length;j++)
          {
              if(arr[i]>=arr[j])
              {
                  var temp=arr[i];
                  arr[i]=arr[j];
                  arr[j]=temp;
            }
          }
      }
      console.log("array in assending oder",arr);
  }
  var arr=[10,30,70,80,50,40]
  bobbleSort(arr);
  
  
  
  console.log("---------------Self invoke function------------------");
  
  (function(arr)
  {
      for(var i=0;i<=arr.length;i++)
      {
          for(var j=i;j<=arr.length;j++)
          {
              if(arr[i]>=arr[j])
              {
                  var temp=arr[i];
                  arr[i]=arr[j];
                  arr[j]=temp;
            }
          }
      }
      console.log("array in assending oder",arr);
  })([10,30,70,80,50,40])
  
  
  console.log("-----------------Arrow function-------");
  
  
      var bobbleSort2=arry3=>{
          
      for(var i=0;i<=arry3.length;i++)
      {
          for(var j=i;j<=arry3.length;j++)
          {
              if(arry3[i]>=arry3[j])
              {
                  var temp=arry3[i];
                  arry3[i]=arry3[j];
                  arry3[j]=temp;
            }
          }
      }
      console.log("array in assending oder",arry3);
  }
  var arry3=[100,30,70,80,500,40]
  bobbleSort2(arry3);



  console.log("---------------Named function------------------");

function prime(n)
{
    var count=0;
    for(var i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
        count++;
        }
      
    }
    (count<=1)?console.log(`${n} is prime number`):console.log(`${n} is not prime number`)
}
prime(24)




console.log("---------------Annonymus function------------------");

var  prime1=function(n)
{
    var count=0;
    for(var i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
        count++;
        }
      
    }
    (count<=1)?console.log(`${n} is prime number`):console.log(`${n} is not prime number`)
}
prime1(29)



console.log("---------------arrow function------------------");

var  prime2=num1=>
{
    var count=0;
    for(var i=2;i<=num1/2;i++)
    {
        if(num1%i==0)
        {
        count++;
        }
      
    }
    (count<=1)?console.log(`${num1} is prime number`):console.log(`${num1} is not prime number`)
}
prime2(37)




console.log("---------------self invoke function------------------");

(function(num)
{
    var count=0;
    for(var i=2;i<=num/2;i++)
    {
        if(num%i==0)
        {
        count++;
        }
      
    }
    (count<=1)?console.log(`${num} is prime number`):console.log(`${num} is not prime number`)
})(91)



console.log("---------------Named function------------------");

function Febbonaci(n)
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
}
Febbonaci(10)


console.log("---------------Annonymus function------------------");

Febbonaci=function(n)
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
}
Febbonaci(15)



console.log("---------------Arrow function------------------");

 var Febbonaci=n=>
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
}
Febbonaci(5)


console.log("---------------self invoke function------------------");

 (function(n)
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
})(6)



console.log("-----Named function----");

function factNum(num)
{
    let fact=1;
    for(let i=1;i<=num;i++)
    {
         fact=fact*i;
        
    }
    console.log(`factorial of ${num}=${fact}`);
}
factNum(5)





console.log("-----Annonymus function----");

const factNum1=function(num)
{
    let fact=1;
    for(i=1;i<=num;i++)
    {
         fact=fact*i
        
    }
    console.log(`factorial of ${num}=${fact}`);
}
factNum1(10)



console.log("------------arrow function----------");


const factNum2=num=>{
    let fact=1;
for(i=1;i<=num;i++)
{
    fact=fact*i
}
return fact;
}
console.log(` factorial of number=${factNum2(4)}`);


console.log("------------Self invoke function----------");

(function(num){
    let fact=1;
    for( let i=1;i<=num;i++)
{
    fact=fact*i
}
console.log(` factorial of number=${fact}`);

})(4)


console.log("====================Named function=============");

function revString(str)
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
        
    }
    console.log( `reversed string is ${revString}`);
    
}
var str1="12345"
revString(str1)

console.log("====================Annonymus function=============");

var revString=function(str)
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
   
    }
    console.log( `reversed string is ${revString}`);
    
}
var str1="Abcfdsa"
revString(str1)



console.log("==============Arrow function=================");

var revString=str=>
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
   
    }
    console.log( `reversed string is ${revString}`);
    
}
var str2="xyzsdga"
revString(str2)



console.log("==============self invoked function=================");

(function(str)
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
   
    }
    console.log( `reversed string is ${revString}`);
    
})("TECHNOELEVATE")


console.log("---------------Named function------------------");

function secondLargest(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
}
var arr=[90,30,70,100,50,40]
secondLargest(arr);




console.log("---------------annonymus function------------------");

var secondLargest=function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
}
var arr=[0,30,70,80,400,100,40]
secondLargest(arr);



console.log("---------------Self invoke function------------------");

(function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
})([1,300,70,80,200,5,40])


console.log("-----------------Arrow function-------");


    var secondLargest=arry3=>{
        
    for(var i=0;i<=arry3.length;i++)
    {
        for(var j=i;j<=arry3.length;j++)
        {
            if(arry3[i]<=arry3[j])
            {
                var temp=arry3[i];
                arry3[i]=arry3[j];
                arry3[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arry3[1]);
}
var arry3=[100,30,70,80,500,40]
secondLargest(arry3);

console.log('----------------------------------------------');

function random1(min,max){
    const val1=Math.floor(Math.random()*max)
    if (val1 < max-min ){
        console.log(`Random no. b/w ${min} & ${max} : ${val1+min}`);
    }else if(val1>max-min){
        console.log(`Random no. b/w ${min} & ${max} : ${val1}`);
    }
}

random1(10,50)
console.log("-------------------------");

const random2=function(min,max){
    const val1=Math.floor(Math.random()*max)
    // console.log(val1);
    if (val1 < max-min ){
        console.log(`Random no. b/w ${min} & ${max} : ${val1+min}`);
    }
    else if(val1>max-min){
        console.log(`Random no. b/w ${min} & ${max} : ${val1}`);
    }
}

random2(10,50)
console.log("-------------------------");

(function(min,max){

    const val1=Math.floor(Math.random()*max)
    if (val1 < max-min ){
        console.log(`Random no. b/w ${min} & ${max} : ${val1+min}`);
    }
    else if(val1>max-min){
        console.log(`Random no. b/w ${min} & ${max} : ${val1}`);
    }
}) (10,100)

console.log("-------------------------");

const random3=(min,max)=>{
    const val1=Math.floor(Math.random()*max)
    if (val1 < max-min ){
        console.log(`Random no. b/w ${min} & ${max} : ${val1+min}`);
    }
    else if(val1>max-min){
        console.log(`Random no. b/w ${min} & ${max} : ${val1}`);
    }
}

random3(1,50)