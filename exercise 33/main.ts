// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7,];

// Using for-loop
for(let oneNumber of numbers){
    let ordinlEnding: string;

    if(oneNumber === 1){
        ordinlEnding = "st"
    }
    else if (oneNumber === 2){
        ordinlEnding = "nd"
    }
    else if (oneNumber === 3){
        ordinlEnding = "rd"
    }
    else{
        ordinlEnding = "th"
    }
    console.log(`${oneNumber}${ordinlEnding}`);
}









