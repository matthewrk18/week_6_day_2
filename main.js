//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes.
You can either display all of the values in the object - or, if you want a much tougher challenge,
loop through values(if applicable) to grab each favorite food.

Example 1:
Output This persons favorite pizza is ["Deep Dish","South Side Thin Crust"]...

Example 2 (Harder):
This person has many favorite foods:
Deep Dish, South Side Thin Crust, anything not from taco bell, Portillos Burgers, CHocolate, Vanilla, oreo...

*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(`This person's favorite ${[Object.keys(person3)[i]]}:`)
    console.log(person3[Object.keys(person3)[i]])
}


//=======Exercise #2=========//
/*
Write a class for a Person that has attributes for name, age, and arrray of their hobbies.
If should also have a printInfo method that prints the attributes in a formatted string.
Create a method that accepts a parameter to add to a Person's list of hobbies.
Create two people using the 'new' keyword, and print 
both of their infos. Add a hobby to one persons hobby list.
*/

// Create our Person Class here

class Person{
    constructor(name, age ,hobbies){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

// Create the printInfo method

    printInfo(){
        console.log(`Hello my name is ${this.name}, I am ${this.age} years old. Here are my hobbies.`)
        for (let i = 0; i < this.hobbies.length; i++){
            console.log(this.hobbies[i])
        }
    }

// Create another function for the addHobbies method that takes one parameter

    addHobby(hobby){
        this.hobbies.push(hobby)
        console.log(`Here are your updated hobbies: ${this.hobbies}`)
    }
}

//Instantiating
let joe = new Person('Joe', 35, ['Running', 'Skiing'])
let paul = new Person('Paul', 30, ['Walking', 'Golf'])

// Adding to the hbbies array...
joe.addHobby('Beach')
joe.printInfo()
paul.printInfo()





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let checkTen = (a_string) =>{
    return new Promise ((resolve, reject) => {
        if(a_string.length > 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
};

checkTen('Hellooooooooooo!!')
.then((value) =>{
    console.log(`It's ${value}: Big Word!`)
})
.catch((error) =>{
    console.log(`It's ${error}: Small Word!`)
})



// codewars


