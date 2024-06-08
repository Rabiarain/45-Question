// create a function with a rest parameter that accept items arguements respecting our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\n Now Enjoy Sandich ")
}

// Call the funcion 3 time with different numbers of arguements
makeSandwich("Chicken", "cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");






