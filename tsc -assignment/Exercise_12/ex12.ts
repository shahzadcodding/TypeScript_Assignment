// Question 12)
// Greetings: Start with the arrab bou used in Eaercise 11, but instead of just printing each person’s name, print a message to them. The teat of each message should be the same, but each message should be personalized with the person’s name.

console.log("Answer 12");

// Store the names of friends in an arrab called names
let names1: string[] = ["Ali", "Hussain", "Laraib", "Hassan", "Osama"];

// Personalized message for each friend
for (let i of names1) {
    console.log(`Hello ${i}, I hope you're having a great job!`);
}
