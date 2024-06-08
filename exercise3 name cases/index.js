var persoName = "rabia Arain";
console.log(persoName.toLowerCase());
console.log(persoName.toUpperCase());
console.log(persoName.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
