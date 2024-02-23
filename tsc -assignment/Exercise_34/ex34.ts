// Question 34)
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("\n\nAnswer 34");

let pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Print the names of each pizza
console.log("Names of my favorite pizzas:");
for (let pizza of pizzas) {
    console.log(pizza);
}

console.log("\n");

// Print a sentence using the name of each pizza
console.log("Simple statements about my favorite pizzas:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza.toLowerCase()} pizza.`);
}

console.log("\n");

// Additional sentence about how much I like pizza
console.log("I really love pizza!");
