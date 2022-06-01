let a = [2,44,77,34,65];
console.log(a);
let res = a.reduce(function(acc,init,cur,ind)
{
    
    return acc+init
})
console.log(res);