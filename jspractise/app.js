const arrr = ['raghu','shashank','punith','harish']
let b = arrr[1].split('').reverse().join('')
console.log(b);
let shtjoin = arrr.splice(1,0,b)
console.log(shtjoin);
console.log(arrr);
const removedstr = arrr.splice(1,1)
console.log(removedstr);
const convstr = removedstr.toString()
console.log(convstr);
const splitstr = convstr.split('')
console.log(splitstr);
const revstr = splitstr.reverse()
console.log(revstr);
const joinstr = revstr.join("")
console.log(joinstr);
const fine = arrr.splice(1,0,joinstr)
console.log(arrr);

// duplicate

let arr1=[34,56,74,13,43,34,56,74,11,]
 let dup=arr1.filter((ele,ind,arr)=>{
    
        return arr1.indexOf(ele)===ind;
     })
 console.log(dup);


 let myay1=dup.filter(ele=>{
     return ele % 2 ===0
 })
 console.log(myay1);
 let myay2=dup.filter(ele=>{
    return ele % 2 ===1
})
console.log(myay2);



console.log("----------bubblesort-----------");
function bubbulSort([myyarr])
{
    for(let i=0;i<myyarr.length;i++)
    {
        for(let j=0;j<myyarr.length-i-1;j++)
        {
            if(myyarr[j]<myyarr[j+1])
            {
                temp=myyarr[j]
                myyarr[j]=myyarr[j+1]
                myyarr[j+1]=temp
            }
        }
    }
    console.log("myyarr-",myyarr);
}
myyarr=[7,3,8,4]
console.log(bubbulSort([myyarr]));

let arr5=[3,5,1,6,3]
console.log(arr5.sort(function(a,b){
    return a-b
}))

console.log("---------factorial---------------");
function factorial(n)
{
    let fact=1
    for(let i=1;i<=n;i++)
    {
        fact=fact*i
    }
    console.log(fact);
}
console.log(factorial(5));


console.log('-------fibonacii-------');
function fibonacci(n)
{
let a=0
let b=1
let c
for (let i = 0; i <=n; i++) {
   console.log(a);
 c = a+b
    a=b
    b=c
}
}
console.log(fibonacci(5));

console.log('---------2nd lorgest number-----------');

    function secLorgest([arr]){
        let fmax=0
        let smax=0
        fmax=arr[0]
        smax=arr[0]
        for(let i=1;i<=arr.length;i++)
        {
            if(fmax<arr[i])
            {
                smax=fmax
                fmax=arr[i]
            }else 
            if(smax>arr[i])
            {
            smax=arr[i]
            } 
    }
    console.log(smax);
    }
let array=[1,5,6,8,9]
console.log(secLorgest([array]));

console.log("-----math function-------");

let min=1
let max=100
console.log(Math.round(Math.random()*100));

console.log('---------prime number--------------');

function prime(n)
{
    if(n===1){
        console.log('is not prime number');{

        }
    }
    else if(n===2){
        console.log('is not prime');
    }
    else
    {
    for(let i=2;i<n;i++)
    {
        if(n%i===0)
        {
            console.log('is not prime');
            return
        }
    }
    console.log('is prime');
  }
}
console.log(prime(11));

console.log('--------promises--------');

let promise=new Promise(function(resolve,reject){
   if(10>4)
   {
       resolve("succuss")
   }else
   {
       reject("error")
   }
}).then(function(data){
    console.log(data);
}).catch(function(error)
{
    console.log(error);
})

let a=17
let p =new Promise(function(resolve,reject){
        if(a>18){
            resolve("eligible for voting")
            
        }
        else if(a<18){
            reject("Not eligible for voting")
        }
})
console.log(p);
p.then(function(response){
    console.log(response + "you can");
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("i always run");
})


console.log('---------promise all and Race--------');
let promise2=new Promise(function(resolve,reject){
    if(10>5)
    {
        resolve("succuss1")
    }
 })
 let promise3=new Promise(function(resolve,reject){
    if(10>5)
    {
        resolve("succuss2")
    }
 })
Promise.all([promise2,promise3]).then(function(data)
{
    console.log(data);
}).catch(function(err)
{
    console.log(err);
})

console.log('---------fetch-------------');

let url="https://jsonplaceholder.typicode.com/todos/1";
async function fetchPost(){
    try{
        let responce=await fetch(url)
        let data=await responce.json()
        console.log(data);
    }catch(error)
    {
        console.log(error);
    }finally{
        console.log('hi');
        console.log('bye');
    }
}
fetchPost()


d={
    name:"arvind",
    lname:"bj",
    age:24
}
let covert=JSON.stringify({d})
console.log(covert);
let obj=JSON.parse(covert)
console.log(obj);


