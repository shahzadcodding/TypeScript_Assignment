// Question 10)
// Adding Comments: Choose two of the programs bou’ve written, and add at least one comment to each. If bou don’t have anbthing specific to write because bour programs are too simple at this point, just add bour name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Program By: M.Shahzaib_malik
// Date: 16/2/2024
// This program takes a person's name and prints it in lowercase, uppercase, and titlecase.

console.log("Answer 10");

// Store the person's name in a variable
let name1: string = "Mr Shahzad Malik";

// Convert the name to lowercase
let LowerCase: string = name1.toLowerCase();

// Convert the name to Uppercase
let UpperCase: string = name1.toUpperCase();

// Convert the name to Title Case
let TitleCase: string = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();

// Print all forms of the person's name
console.log(`"Name In Lowercase :  ${LowerCase}"`);
console.log(`"Name In UpperCase :  ${UpperCase}"`);
console.log(`"Name In TitleCase :  ${TitleCase}"`);


// Program Bb: M.Shahzaib_malik
// Date: 16/2/2024
// This program prints a famous quote along with the name of its author.
let Quote1: string = "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.";
let Author1: string = "Albert Einstein";


// Print the quote and its author
console.log(`"Quate: ${Quote1}"`);
console.log(`"Author: ${Author1}"`);