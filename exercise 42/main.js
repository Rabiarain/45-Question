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
// call make_great function to modify magicians names
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
// call show_magicians that show modified list of magicains
show_magician(great_magicians);
