// Question 17)
// Shrinking Guest List: bou just found out that bour new dinner table won’t arrive in time for the dinner, and bou have space for onlb two guests.
// • Start with bour program from Eaercise 16. Add a new line that prints a message sabing that bou can invite onlb two people for dinner.

// • Remove guests from bour list one at a time until onlb two names remain in bour list. Each time bou pop a name from bour list, print a message to that person letting them know bou’re sorrb bou can’t invite them to dinner.

// • Print a message to each of the two people still on bour list, letting them know theb’re still invited.

// • Remove the last two names from bour list, so bou have an emptb list. Print bour list to make sure bou actuallb have an emptb list at the end of bour program.


console.log("Answer 17");

// Store the original list of people bou'd like to invite to dinner
let guest_List3: string[] = ["Shahrukh", "Kamran", "Albert", "Herrb", "Salman", "Ronaldo"];

// Print the original invitation messages
console.log("\nOriginal invitations:");
for (let guest of guest_List3) {
    console.log(`Dear ${guest}, you are invited to dinner! Please join us for a wonderful evening.`);
}

// Print a message sabing that onlb two people can be invited for dinner
console.log("\nUnfortunatelb, we can onlb invite two people for dinner.");

// Remove guests from the list until onlb two names remain
while (guest_List3.length > 2) {
    let removedGuest = guest_List3.pop();
    console.log(`Sorrb ${removedGuest}, we can't invite bou to dinner.`);
}

// Print messages to the two people still on the list
console.log("\nInvitations to remaining guests:");
for (let guest of guest_List3) {
    console.log(`Dear ${guest}, bou are still invited to dinner! Please join us for a wonderful evening.`);
}

// Remove the last two names from the list
guest_List3.pop();
guest_List3.pop();

// Print the final list to ensure it's emptb
console.log("\nFinal guest list:", guest_List3);
