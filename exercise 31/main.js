var userNames = ["Umaima", "Tabassum", "Alishba", "Admin", "Aeman"];
userNames = [];
if (userNames.length === 0) {
    console.log("your Array is Empty We need to find some users!");
}
else {
    // Using ForEach Loop on Array
    userNames.forEach(function (OneUser) {
        if (OneUser === "Admin") {
            console.log("Hello ".concat(OneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(OneUser, ", thank you for logging in again."));
        }
    });
}
