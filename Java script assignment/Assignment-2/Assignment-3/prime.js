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