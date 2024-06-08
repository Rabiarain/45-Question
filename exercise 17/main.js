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
// inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// Using while.loop to remove guests from the array until only two Names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I Cant invite you to Dinner"));
}
// Sending a invitation to the last two guests on the list 
console.log("invitation to the last two guests");
guestList.forEach(function (lastTwo) { return console.log("luckly ".concat(lastTwo, ", you are still invited to dinner")); });
// Removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
