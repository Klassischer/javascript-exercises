/*1. create an empty array and an empty variable for the second argument
2. check if the second argument is part of the array
3. if so, at which position does it appear?
4. check if it appears more than one time
5. remove all the instances of the argument in the array (maybe with a loop in case there are several instances)
6. return the new array*/


const removeFromArray = function(array, ...element) {
   for (let i = 0; i < element.length; i++) {
    let elementItem = element[i];
    if (array.includes(elementItem)) {
        let position = array.indexOf(elementItem);
        while ( position !== -1) {
            array.splice(position, 1);
            position = array.indexOf(elementItem);
        }
        
    }
    else {
        console.log(`${element} does not exist in the array`);
      }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
