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

// call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);

// call show_magicians that show modified list of magicains
show_magician(great_magicians)