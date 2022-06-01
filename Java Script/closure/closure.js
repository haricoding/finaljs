//Closures
function outer(){
    let count = 0
    function inner(){
    console.log('inner func');
    count = count + 1
    console.log('count', count);
}
return inner
}
const innerFunc = outer()
innerFunc()
innerFunc()
innerFunc()

// what is the use of closures ? why we use clouser ?
// 1. To preserve the values?
//2. For data privacy
function increaseCounter(){
    let counter = 0
    function counterUpdate(){
        counter = counter+1
        console.log(counter)
        return counter
    }
    return counterUpdate
}
const counterIncrease = increaseCounter()
counterIncrease()
counterIncrease()

// There is a possibility counter will be 0 if
// increaseCounter is called again
const c = increaseCounter()
c()

function increaseCounter(){
    let counter = 0
    function counterUpdate(){
        counter = counter + 1
        console.log(counter)
        return counter
    }
    return counterUpdate
    
}

// self invoked function will be executed only once
// hence counter cannot be reinitialized to 0 again
// only counterupdate function will be able to change the
// counter variable value
const counterInc = (function(){
    let counter = 0
    function counterUpdate(){
        counter = counter + 1
        console.log(counter)
        return counter
    }
    return counterUpdate
})()

counterInc()
counterInc()
counterInc()
counterInc()