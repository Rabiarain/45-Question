// Array of curren users
let current_users = ["Zain", "Qadir", "Shehaq", "Murtaza", "Osama"];

// Array of new users
let new_users = ["Rabiya", "Ayesha", "Zain", "Murtaza", "Shehaq"];

// Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {

    // Making a condition for username already exists and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
    // Print Different messages using if-else statement
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})

