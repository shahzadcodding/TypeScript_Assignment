// Question 45)
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

console.log("\n Answer 45");

// Define a function to store car information
function storeCarInfo(manufacturer: string, model: string, ...extras: [string, any][]) {
    // Create an object to store car information
    let car: { [key: string]: any } = {
        Manufacturer: manufacturer,
        Model: model
    };

    // Add additional information to the car object
    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    // Return the car object
    return car;
}

// Call the function with required information and additional name-value pairs
let carInfo = storeCarInfo('Toyota', 'Camry', ['Color', 'White'], ['Year', 2024]);

// Print the object to verify the stored information
console.log(carInfo);
