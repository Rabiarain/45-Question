// Define the function to show magicians names
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["Ali", "Usama", "Usman"];
// Making a copy of original array through .Slice() function
var copy_magician_names = magicians_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Original and copied
// Original
console.log("Original Array\n");
show_magician(magicians_names);
// Copied
console.log("\nCopied Array\n");
show_magician(copy_great_magicians);
