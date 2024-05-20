//premitive 

// 7 types
// string,number,boolean,null,undefined,bigInt,Symbol
let name = "nikhil"
let age = 26
let inLoggedIn = false
let roomTemp = null;
let userEmail = undefined;
const bigNumber = 98677435646565464645n;
const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id)
console.log(anotherId)
console.log(Id === anotherId) //false because uniqueness of symbol


// non-premetive or (Reference)
// Array, Functions, Objects

const heros = ["batman", "spiderman", "antman"]
let myObject = {
    name: "nikhil",
    age: 26,
    isLoggedin: false
}

const myFunction = function () {
    console.log("hello world!")
}

console.log(typeof heros)       //object
console.log(typeof myObject)    //object
console.log(typeof myFunction)  //function

//++++++++++++++++++++++++++++++++++++++++++++++

//stack memory (Premetive)         heap memory(Non-Premetive)
// call by value                   call by reference
// copy value in new variable      directly pointing to same reference address

let email = "nikhilnikam@gmail.com";
let newEmail=email;
newEmail="newemail@gmail.com"

console.log(email)
console.log(newEmail)

let userOne={
    name:"userOne",
    number:1
}

let userTwo=userOne;

userTwo.name="userTwo";

console.log(userOne)
console.log(userTwo)