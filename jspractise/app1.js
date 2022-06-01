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
let array=[1,56,34,78,43,99,77,82]
console.log(secLorgest([array]));