// Question 15)
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

console.log("Answer 15");

// Store the original list of people bou'd like to invite to dinner

let guest_List1: string[] = ["Ahmed", "Shahzaib", "Shahzad"];

// Print the original invitation messages
for (let guest of guest_List1) {
    console.log(`Dear ${guest}, you are invited to dinner! Please join us for a wonderful evening.`);
}

// Print the name of the guest who can't make it
console.log(`${guest_List1[2]} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
guest_List1[2] = "Shahzad";

// Print the new invitation messages
console.log("\nNew invitations:");

for (let guest of guest_List1) {
    console.log(`Dear ${guest}, You are invited to dinner! Please join us for a wonderful evening.`);
}
