const reverseString = function(string) {
    let newString = string.split(""); //split into an array
    newString.reverse();  //reverse the array
    return newString.join("");  //join the array back into a string
};

// Do not edit below this line
module.exports = reverseString;
