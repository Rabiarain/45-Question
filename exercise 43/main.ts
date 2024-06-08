// Define the function to show magicians names
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magicians_names = ["Ali", "Usama", "Usman"]

// Making a copy of original array through .Slice() function
let copy_magician_names = magicians_names.slice()

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays Original and copied

// Original
console.log("Original Array\n")
show_magician(magicians_names);

// Copied
console.log("\nCopied Array\n")
show_magician(copy_great_magicians);
