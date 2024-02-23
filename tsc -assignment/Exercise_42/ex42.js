// Question 42)
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
console.log("\n Answer 42");
// Define a function to display magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define a function to modify magicians array by adding "the Great" to each magician's name
function make_great1(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Main function
function main1() {
    // Initial list of magicians
    var magicians = ["Osama", "Shafiq", "Rizwan"];
    // Show the original list of magicians
    console.log("Original List of Magicians:");
    show_magicians(magicians);
    // Modify the list of magicians to make them great
    var great_magicians = make_great1(magicians);
    // Show the modified list of magicians
    console.log("\nList of Great Magicians:");
    show_magicians(great_magicians);
}
// Call the main function
main1();
