//Calculate pie formula : PI = 4/1 - 4/3 + 4/5 - 4/7...

function calcPI(iterations) {
    let pi = 0, divisor = 1; 
    for(i = 0; i <= iterations; i++) {
        pi = pi + (4/divisor) - (4/(divisor + 2)); // pi = 4/1 - 4/3 ...etc
        divisor += 4
    }

    document.getElementById("output1").value = pi.toFixed(10); //Limits amount of digits
}





// Fibonacci Sequence example: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

let fibList = [];
function getFibList(howMany) {
    for(i = 0; i < howMany; i++) {
        fibList[i] = fib(i); //Indivdually add the numbers to the cells in Array
    }
    fibList.shift();
    document.getElementById("output1").value = fibList.join(", ");
}

function fib(whichNum) {
    let num1 = 1, num2 = 0, temp, 
    i=0;
    while(i < whichNum ) {
        //Magic
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;
    }
    return num2;
}



//MadLib Generator

let mLText = "My dear old # sat me down to hear some words of wisdom\n1. Give a man a # and you # him for a day. # a man to # and he'll # forever\n2. He who # at the right time, can # again\n3. Always wear # # in case you're in a # .\n4. Don't use a # to wipe your # . Always have a clean # with you";

 // Convert string into Array
let mLArray = mLText.split(" ");

 // Creat array for user input
let inputArray = [];


 function madLibGenerator() {
     createInputArray();

     //Error message if user didnt not give correct/any input
     if(checkForMissingInput()) {
     document.getElementById("output1").value = "Enter all values above";
 } else {
    createMLSentence();
 }
}

function createInputArray() {
    //Store user's inputs
    for(i = 0; i <= 13; i++) {
        inputArray[i] = document.getElementById("i" + i).value;
    }
}

function checkForMissingInput() {
    //Array with the default words
    let defaultArrayValues = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", "Body Part", "Event"];

    //If the value from inputArray is greater than -1, the user has failed to place input
    for(i = 0; i < inputArray.length; i++) {
        if(defaultArrayValues.indexOf(inputArray[i]) > -1) {
            return true;
        }
    }
    return false;
}

function createMLSentence() {
    let arrIndex = 0;

    //Search for an instance of "#" and replace it with the input from the user
    for(i = 0; i < mLArray.length; i++) {
        let matchIndex = mLArray.indexOf("#");
        mLArray[matchIndex] = inputArray [arrIndex];
        arrIndex++;
    }
    document.getElementById("output1").value = mLArray.join(" ");
}