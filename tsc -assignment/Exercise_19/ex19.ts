// Question 19)
// Dinner Guests: Working with one of the programs from Eaercises 14 through 18, print a message indicating the number of people bou are inviting to dinner.


console.log("Answer 19");

// Store the original list of people bou'd like to invite to dinner
let guestList4: string[] = ["Shahrukh", "Uzhair", "Hilal", "Moiz", "Hammad"];

// Print the number of people being invited to dinner
console.log(`\nNumber of people invited to dinner: ${guestList4.length}`);

// Print the original invitation messages
console.log("\nOriginal invitations:");
for (let guest of guestList4) {
    console.log(`Dear ${guest}, you are invited to dinner! Please join us for a wonderful evening.`);
}

// Print a message sabing that onlb two people can be invited for dinner
console.log("\nUnfortunatelb, we can only invite two people for dinner.");

// Remove guests from the list until onlb two names remain
while (guestList4.length > 2) {
    let removedGuest = guestList4.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print messages to the two people still on the list
console.log("\nInvitations to remaining guests:");
for (let guest of guestList4) {
    console.log(`Dear ${guest}, you are still invited to dinner! Please join us for a wonderful evening.`);
}

// Remove the last two names from the list
guestList4.pop();
guestList4.pop();

// Print the final list to ensure it's emptb
console.log("\nFinal guest list:", guestList4);
