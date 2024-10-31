//Write a function that simply repeats the string a given number of times:
// repeatString('hey', 3) // returns 'heyheyhey'



const repeatString = function(string,num) {
    let result = "";
    if (num < 0) return "ERROR";
    for (let i = 1; i <= num; i++){

        result += string;
    }
    return result;
 };

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
