// Question 43)
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

console.log("\n Answer 43");

// Define a function to display magicians
function show_magicians1(magicians: string[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function to modify a copy of magicians array by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Main function
function main() {
    // Initial list of magicians
    let magicians: string[] = ["Shahzaib", "Shafiq", "Rizwan"];

    // Show the original list of magicians
    console.log("Original List of Magicians:");
    show_magicians1(magicians);

    // Make a copy of the original array of magicians and modify it to make them great
    let great_magicians = make_great([...magicians]); // Using the spread operator to create a copy

    // Show the list of magicians with "the Great" added to each magician's name
    console.log("\nList of Great Magicians:");
    show_magicians1(great_magicians);

    // Show that the original array of magicians remains unchanged
    console.log("\nOriginal List of Magicians (Unchanged):");
    show_magicians1(magicians);
}

// Call the main function
main();

