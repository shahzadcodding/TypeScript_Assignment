// Question 42)
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified

console.log("\n Answer 42");

// Define a function to display magicians
function show_magicians(magicians: string[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function to modify magicians array by adding "the Great" to each magician's name
function make_great1(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Main function
function main1() {
    // Initial list of magicians
    let magicians: string[] = ["Osama", "Shafiq", "Rizwan"];

    // Show the original list of magicians
    console.log("Original List of Magicians:");
    show_magicians(magicians);

    // Modify the list of magicians to make them great
    let great_magicians = make_great1(magicians);

    // Show the modified list of magicians
    console.log("\nList of Great Magicians:");
    show_magicians(great_magicians);
}

// Call the main function
main1();

