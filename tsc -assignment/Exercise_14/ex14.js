// Question 14)
// Guest List: If bou could invite anbone, living or deceased, to dinner, who would bou invite? Make a list that includes at least three people bou’d like to invite to dinner. Then use bour list to print a message to each person, inviting them to dinner.
console.log("Answer 14");
// Store a list of people bou'd like to invite to dinner
var guest_List = ["Malik", "Osama", "Ali"];
// Invite each person to dinner
for (var _i = 0, guest_List_1 = guest_List; _i < guest_List_1.length; _i++) {
    var guest = guest_List_1[_i];
    console.log("Dear ".concat(guest, ", You are invited to dinner! Please join us for a wonderful evening. \"\n\""));
}
