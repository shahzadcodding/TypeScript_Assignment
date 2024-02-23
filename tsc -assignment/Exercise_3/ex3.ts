// Question 3)
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


console.log("Answer 3");

// Store a person’s name in a variable
let person_Name:  string = "Shahzad";

// print the person’s name in lowercase
console.log("lowercase: ",person_Name.toLowerCase());


// print the person’s name in lowercase
console.log("uppercase: ",person_Name.toUpperCase());


// print the person’s in titlecase
console.log("titlecase: ", person_Name.charAt(0).toUpperCase() + person_Name.slice(1).toLowerCase());
