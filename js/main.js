//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
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

for(let i = 0; i < Object.keys(person3).length; i++) {
    console.log(Object.keys(person3)[i])
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor(name,age,city){
        this.name = name,
        this.age = age,
        this.city = city
    }

    printInfo = () =>{
        return `Name: ${this.name} \nAge: ${this.age} \nCity ${this.city}`
    }

    
}

let gregory = new Person('Gregory', 24, 'Boston')
let george = new Person('George', 26, 'Detroit')

console.log(gregory.printInfo())
console.log(george.printInfo())

let countUp = (function(){
    let counter = 24;
    console.log('Hit')
    return function() {return counter ++}
})()




    //class function   prototype like bus 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

//promise function
//if statement resolve and reject
//

const isGreaterThan = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10){
            resolve(num)
        }  else{
            reject(num)
        }
            
        
    })
}

isGreaterThan(10)
    .then((result) => {
        console.log(`Big word: ${result}`)
    })

    .catch((error) => {
        console.log(`Small Number: $error`)
    })



    function openOrSenior(data){
        return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
    }
    
    
    function hoopCount (n) {
        if (n>=10) return 'Great, now move on to tricks'
        return 'Keep at it until you get it'
    }