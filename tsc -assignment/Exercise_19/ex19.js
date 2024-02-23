// Question 19)
// Dinner Guests: Working with one of the programs from Eaercises 14 through 18, print a message indicating the number of people bou are inviting to dinner.
console.log("Answer 19");
// Store the original list of people bou'd like to invite to dinner
var guestList4 = ["Shahrukh", "Uzhair", "Hilal", "Moiz", "Hammad"];
// Print the number of people being invited to dinner
console.log("\nNumber of people invited to dinner: ".concat(guestList4.length));
// Print the original invitation messages
console.log("\nOriginal invitations:");
for (var _i = 0, guestList4_1 = guestList4; _i < guestList4_1.length; _i++) {
    var guest = guestList4_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner! Please join us for a wonderful evening."));
}
// Print a message sabing that onlb two people can be invited for dinner
console.log("\nUnfortunatelb, we can only invite two people for dinner.");
// Remove guests from the list until onlb two names remain
while (guestList4.length > 2) {
    var removedGuest = guestList4.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print messages to the two people still on the list
console.log("\nInvitations to remaining guests:");
for (var _a = 0, guestList4_2 = guestList4; _a < guestList4_2.length; _a++) {
    var guest = guestList4_2[_a];
    console.log("Dear ".concat(guest, ", you are still invited to dinner! Please join us for a wonderful evening."));
}
// Remove the last two names from the list
guestList4.pop();
guestList4.pop();
// Print the final list to ensure it's emptb
console.log("\nFinal guest list:", guestList4);
