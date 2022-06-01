let a = [2,44,77,56,43,98,66,48];
console.log(a);
let res = a.filter(function(ele,ind,arr)
{
    return ele%2===0;
})
console.log(res);