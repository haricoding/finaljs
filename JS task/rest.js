function addone(a,b){
    return a+b
}
function addtwo(a,b,c){
    return a+b+c
}
function addthree(a,b,c,d){
    return a+b+c+d
}
console.log( addone(10,20));
addtwo(10,20,30)
addthree(10,20,30,40)

//using rest

function addall(...nums){
    let total = 0
    for(let i=0;i<nums.length;i++){
        total=total+nums[i]
    }
    console.log(total);
}
addall(20,10,87,45,45,32,11)

//
function stat(a, b) {
    return [
        a + b,
        (a + b) / 2,
        a - b
    ]
}
let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10

