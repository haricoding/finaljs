//console.log('srart')
// (10===10 ? console.log('Equal'):console.log('NotEqual'))

// semicolon is manatory Before() if you are writing ()
// next line after executing any function or after



console.log('start');
(10===10 ? console.log('Equal'):console.log('NotEqual'))
console.log('end');
console.log('-----------------------');
function test(){
    function inner(){
        console.log('Inner function');
    }
    return inner
}

// const val = test()
// console.log(val);
//val()console.log(test())
// Function currying
test()();
(function(){
    console.log('hello');
})()

//