let mobile={
    brand:'samsung',
    cost:200000,

    feature:{
        screen:'78inch',
        color:'red'
    }
}
console.log(mobile);

let mobileCopy={...mobile}
console.log(mobileCopy);

let updatemobilecopy=(mobileCopy.cost=10000)
console.log(updatemobilecopy);
console.log(mobileCopy.cost);
console.log(mobile.cost);
console.log(mobileCopy.feature.color="Blue");
console.log(mobileCopy.feature.color); //Blue
console.log(mobile.feature.color); //blue

console.log("Mobile copy",mobileCopy.brand="aaaa");
console.log("mobile ",mobile.brand);

