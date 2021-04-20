// console.log("Testing Script");

// datatypes of Javascript
// string, number, undefined, null - primitive data types
// object, arrays, symbol - non primitive data types

// javascript is free language for datatypes

// declaration of any variable

//  1. var 2. let 3. const

var personName = "Narendra";
var phoneNumber = 8056160364;
var isGoodBoy = undefined;
var accountBalance = null;
console.log(typeof personName); // string
personName = 987;
var personCharacterstics = [{
    hair: "black",
    gender: "male",
    race: "asian"
}]

console.log(typeof personName); // number
console.log(typeof phoneNumber);
console.log(typeof isGoodBoy);
console.log(typeof accountBalance);
console.log(typeof personCharacterstics);

// let scenario
let test = "test1"

function runFunc() {
    let test = "rest1"

    // console.log("rest");
    console.log(test); // rest1
}
// test1

const runFunc1 = () => {
    // console.log("test")
}

runFunc();
console.log(test);

// runFunc1();


const sendMessage = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("number").value;
    const message = document.getElementById("message").value;
    //  string literals in javascript
    const obj = {
        name,
        email,
        phoneNumber,
        message
    };
    console.log(obj);
}