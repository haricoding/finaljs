function getevennumbers(){
    array=[1,2,3,4,5,6,7,8,9,10,11,12]
    // for(var i=0;i< array.length;i++){
    //     if(array[i]%2 === 0){
    //         console.log(array[i] + "<br />");
    //     }
    // }
    const sum = array.filter((value=> value%2 === 1))
        return sum
}
console.log(getevennumbers())
