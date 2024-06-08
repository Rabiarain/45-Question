// Creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7,];
// Using for-loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinlEnding = void 0;
    if (oneNumber === 1) {
        ordinlEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinlEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinlEnding = "rd";
    }
    else {
        ordinlEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinlEnding));
}
