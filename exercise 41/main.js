// creating a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define a array containing magician name
var magicians_name = ["Harry", "Iqbal", "Abid"];
// Call the function to print each magician name
show_magicians(magicians_name);
