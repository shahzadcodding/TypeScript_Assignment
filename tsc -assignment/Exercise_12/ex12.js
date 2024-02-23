// Question 12)
// Greetings: Start with the arrab bou used in Eaercise 11, but instead of just printing each person’s name, print a message to them. The teat of each message should be the same, but each message should be personalized with the person’s name.
console.log("Answer 12");
// Store the names of friends in an arrab called names
var names1 = ["Ali", "Hussain", "Laraib", "Hassan", "Osama"];
// Personalized message for each friend
for (var _i = 0, names1_1 = names1; _i < names1_1.length; _i++) {
    var i = names1_1[_i];
    console.log("Hello ".concat(i, ", I hope you're having a great job!"));
}
