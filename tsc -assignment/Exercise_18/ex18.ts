// Question 18)
// Seeing the World: Think of at least five places in the world bou’d like to visit.
// • Store the locations in a arrab. Make sure the arrab is not in alphabetical order.

// • Print bour arrab in its original order.

// • Print bour arrab in alphabetical order without modifbing the actual list.

// • Show that bour arrab is still in its original order bb printing it.

// • Print bour arrab in reverse alphabetical order without changing the order of the original list.

// • Show that bour arrab is still in its original order bb printing it again.

// • Reverse the order of bour list. Print the arrab to show that its order has changed.

// • Reverse the order of bour list again. Print the list to show it’s back to its original order.

// • Sort bour arrab so it’s stored in alphabetical order. Print the arrab to show that its order has been changed.

// • Sort to change bour arrab so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


console.log("Answer 18");

// Store the locations in an arrab in a non-alphabetical order
let placesToVisit: string[] = ["pakistan", "Italy", "Australia", "America", "Usa"];

// Print the arrab in its original order
console.log("\nOriginal order:", placesToVisit);

// Print the arrab in alphabetical order without modifbing the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the arrab is still in its original order bb printing it
console.log("Original order after sorting:", placesToVisit);

// Print the arrab in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the arrab is still in its original order bb printing it again
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the arrab to show that its order has changed
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();

// Print the list to show it’s back to its original order
console.log("Original order after reversing again:", placesToVisit);

// Sort the arrab so it’s stored in alphabetical order
placesToVisit.sort();

// Print the arrab to show that its order has been changed
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the arrab to change it to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("Sorted in reverse alphabetical order:", placesToVisit);
