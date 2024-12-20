const sumAll = function(int1, int2) {  
    let sum = 0;
    if (int1 < 1 || int2 < 1 || !Number.isInteger(int1) || !Number.isInteger(int2)){
        return "ERROR";
    }
    //detemine which number is bigger
    let start = Math.min(int1, int2);
    let end = Math.max(int1, int2);
    //loop through the numbers
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
    

};

// Do not edit below this line
module.exports = sumAll;
