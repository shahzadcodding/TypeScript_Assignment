// Question 43)
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("\n Answer 43");
// Define a function to display magicians
function show_magicians1(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define a function to modify a copy of magicians array by adding "the Great" to each magician's name
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Main function
function main() {
    // Initial list of magicians
    var magicians = ["Shahzaib", "Shafiq", "Rizwan"];
    // Show the original list of magicians
    console.log("Original List of Magicians:");
    show_magicians1(magicians);
    // Make a copy of the original array of magicians and modify it to make them great
    var great_magicians = make_great(__spreadArray([], magicians, true)); // Using the spread operator to create a copy
    // Show the list of magicians with "the Great" added to each magician's name
    console.log("\nList of Great Magicians:");
    show_magicians1(great_magicians);
    // Show that the original array of magicians remains unchanged
    console.log("\nOriginal List of Magicians (Unchanged):");
    show_magicians1(magicians);
}
// Call the main function
main();
