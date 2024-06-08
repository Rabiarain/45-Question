var guestList = ["Khizra", "Rabiya", "Aqsa", "Iqra"];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ahh sakti");
guestList.splice(0, 1, "Ayesha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
