// External JS Script that get's linked to HTML Document

//Numbers and Bools
var num = 23; // Number
var bool = true; // Boolean

if (bool != false) {
    console.log(num);
}

// Arrays
var arr = ["Ted", "Frank", "Chris", "Chad"];

console.log(arr[1]);

// Null, Undefined, NAN
var arrr = [0, 10, 11, null];
var num = "Todd";

console.log(num * 5); // NaN Error - Not a number
console.log(arrr[4]); // Undefined error
console.log(arrr[3]); // Null

// Objects
var obj = {
    name: "Todd",
    age: 33,
    state: "Michigan",
    country: "USA"
}

console.log(obj.name);

// Control Structure
var bool = true;

if (bool == true) {
    console.log("bool equals " + bool);
}

// IF Statements
var name = "Todd";

if (name == "Ron") {
    console.log("It's Ron");
} else {
    console.log("It's someone else.");
}
