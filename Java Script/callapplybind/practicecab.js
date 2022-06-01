let person1 = {
    name: "harish",
    hello: function(thing){
        console.log(this.name + "says hello" + thing);
        
    },
};
person1.hello("toworld")