// Question 15)
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("Answer 15");
// Store the original list of people bou'd like to invite to dinner
var guest_List1 = ["Ahmed", "Shahzaib", "Shahzad"];
// Print the original invitation messages
for (var _i = 0, guest_List1_1 = guest_List1; _i < guest_List1_1.length; _i++) {
    var guest = guest_List1_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner! Please join us for a wonderful evening."));
}
// Print the name of the guest who can't make it
console.log("".concat(guest_List1[2], " can't make it to dinner."));
// Replace the guest who can't make it with a new person
guest_List1[2] = "Shahzad";
// Print the new invitation messages
console.log("\nNew invitations:");
for (var _a = 0, guest_List1_2 = guest_List1; _a < guest_List1_2.length; _a++) {
    var guest = guest_List1_2[_a];
    console.log("Dear ".concat(guest, ", You are invited to dinner! Please join us for a wonderful evening."));
}
