// Array of curren users
var current_users = ["Zain", "Qadir", "Shehaq", "Murtaza", "Osama"];
// Array of new users
var new_users = ["Rabiya", "Ayesha", "Zain", "Murtaza", "Shehaq"];
// Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exists and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using if-else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
