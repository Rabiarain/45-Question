// Creating a Array
let userNames = ["Iqra", "Khizra", "Rabiya", "Admin", "Aqsa"];

// Using ForEach Loop on Array
userNames.forEach(OneUser => {
    if(OneUser === "Admin"){
        console.log(`Hello ${OneUser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${OneUser}, thank you for logging in again.`)
    }
})