function add(n1,n2){
    return n1+n2
}
function addThree(n1, n2, n3){
    return n1+n2+n3
}
function addfour (n1,n2,n3,n4){
    return n1 + n2 + n3 + n4
}
add(10, 20)
addThree(10,20,30)
addfour(10, 20, 30, 40)
// Rest operator 
// 1. Rest operator should always be the last parameter
// 2. OR Rest operator should be one and only parameter
// 3. (a,b, ...rest) // valid
// 4. (...rest)     //valid
// 5. (...rest, a, b) //invalid (a and b variables will never get any values)
// 6. (a, ...rest, b)  //invalid

function addAll(...nums){
    console.log(nums);
    let total = 0
    for(let i=0; i<nums.length;i++){
        total += nums[i]
    }
    ; console.log('total', total);
}
addAll(10, 20)
addAll(10,20,30)
addAll(10,20,30,40)
addAll(10,20,30,40,50)

//Invalid
/* function addAllValues(...rest, a){
    console.log('a');

}*/
function addAllValues(a,b,...rest){
    console.log(a,b,rest);
}
addAllValues(10,20,30,40,50)


