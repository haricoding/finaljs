// Copy all the layers of an object
//Deep copy
const movie={
    movieName:"spider man",
    director:"John Watt",
    actor:"Holland",
    moredetails:{
        budget:"200MD",
        heroine:"Zendy",
        villain:"Goblin"
    }
}

const movieCopy={
    ...movie,moredetails:{...movie.moredetails}
}
    console.log(movieCopy);
    movie.director="Upendra";
    console.log(movie.director); //Upendra
    console.log(movieCopy.director); //John Watt

console.log("-----------");
movie.moredetails.heroine="Ramya"; //Ramya
console.log(movieCopy.moredetails.heroine); //Zendy

console.log("------------------");

const bike={
    price:7000,
    brand:"Bajaj",
    bikeName:"Pulasr",
    engineDetails:{
        cc:"200cc",
        stroke:"4 Stroke"
    }
}



const bikeCopy={
    ...bike,engineDetails:{...bike.engineDetails}
}
console.log(bikeCopy); //{price: 7000, brand: 'Bajaj', bikeName: 'Pulasr', engineDetails: {…}}
console.log(bike.brand="Hero"); //Hero
console.log(bike);//{price: 7000, brand: 'Hero', bikeName: 'Pulasr', engineDetails: {…}}
console.log(bikeCopy);//{price: 7000, brand: 'Bajaj', bikeName: 'Pulasr', engineDetails: {…}}

const bikeDeepCopy=JSON.parse(JSON.stringify(bike));
console.log(bike.engineDetails.cc="250cc");  //250CC
console.log(bikeCopy.engineDetails.cc);   //200cc
console.log("-------------");
const obj={
    firstName:"Chandan",
}

const obj1={
    lastName:"Sharma",
}
const objectMarge={...obj,...obj1};
console.log(objectMarge);