const sum = require("./sum");
const subtraction = require("./subtraction");
const division = require("./division");
const multiplication = require("./multiplication");

let sumA = 3;
let sumB = 5;

let sumResult = sum(sumA, sumB);
// console.log(sumResult);

let mulA = 4;
let mulB = 6;

let mulReult = multiplication(mulA, mulB);
// console.log(mulReult);

let divA = 25;
let divB = 5;

let divReult = division(divA, divB);
// console.log(divReult);


let subA = 10;
let subB = 5;

let subReult = subtraction(subA, subB);
// console.log(subReult);


if(process.argv[2] == "sum"){
    console.log(sum(+process.argv[3],+process.argv[4]))
}
else if(process.argv[2] == "subtraction"){
    console.log(subtraction(+process.argv[3],+process.argv[4]))
}
else if(process.argv[2] == "division"){
    console.log(division(+process.argv[3],+process.argv[4]))
}
else if(process.argv[2] == "multiplication"){
    console.log(multiplication(+process.argv[3],+process.argv[4]))
}



