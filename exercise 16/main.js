// Creating a Guest List Array
var guestList = ["hamza", "usman", "ayesha", "areeba"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the Name of Guest who cant come
console.log(dontCome, "nai aa sakty han");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Amirr");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a New Guest at starting index of array
guestList.unshift("Ali");
// Adding a new Guest at ending index of array
guestList.push("Zain");
// Get a middle Index of our Guest List array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "osama");
// Print message updated List
console.log("updated List of our Guest");
// Sending a invitation messge to our guests one by one with their names 
guestList.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, ", would you like to dinner with me")); });
