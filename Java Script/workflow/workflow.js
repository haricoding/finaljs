console.log('Start');

function add(a,b) {
    setTimeout(() => {
        console.log('111');
},2000);

    console.log(a+b);
}

add(10,30)

setTimeout(function(){
    console.log('ABC');
},8000);

console.log('222');
console.log('End');