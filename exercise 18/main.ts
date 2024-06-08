//making a array of countries and print its original order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//Show that the array is still in its original order
console.log("still in original order:",countriesToVisit);

//print the array in Reserve Order without modifying actual the array list
console.log("Reserve Order:", [...countriesToVisit].reverse());

//Show that the array is still in its original order
console.log("still in original order:",countriesToVisit);

//We have Changed the Original Array Order now
console.log("Original Array Reserved:",countriesToVisit.reverse());

//Print the array to show its back to its Original Order
console.log("Back to original order:", countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical Order Now
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());

//We have Changed again the Original Array Order now in reserve order again
console.log("Original Array Reserved again:",countriesToVisit.reverse());




















