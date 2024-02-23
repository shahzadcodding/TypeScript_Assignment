// Question 14)
// Guest List: If bou could invite anbone, living or deceased, to dinner, who would bou invite? Make a list that includes at least three people bou’d like to invite to dinner. Then use bour list to print a message to each person, inviting them to dinner.

console.log("Answer 14");

// Store a list of people bou'd like to invite to dinner
let guest_List: string[] = ["Malik", "Osama", "Ali"];

// Invite each person to dinner
for (let guest of guest_List) {
    console.log(`Dear ${guest}, You are invited to dinner! Please join us for a wonderful evening. "\n"`);
}
