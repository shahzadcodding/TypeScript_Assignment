// Question 6)
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure bou use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displabed. Then print the name after striping the white spaces.
console.log("Answer 6");
// Store the person's name with whitespace characters
var person_Name1 = "\t   Mr_Shahzaib   \n";
// Print the name with whitespace
console.log("Name with whitespace:", person_Name1);
// Strip whitespace using trim() function
var striped_Name = person_Name1.trim();
// Print the stripped name
console.log("Stripped name: ", striped_Name);
