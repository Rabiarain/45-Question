let guestList = ["Khizra", "Rabiya", "Aqsa", "Iqra"];

let dontCome = guestList[0];

console.log(dontCome, "Nai Ahh sakti");

guestList.splice(0, 1, "Ayesha");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));