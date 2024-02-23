// Question 39)
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

console.log("\n\n ANswer 39");

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
