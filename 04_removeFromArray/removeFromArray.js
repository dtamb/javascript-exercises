const removeFromArray = function() {
    let newArray = [];
    arrayCycle: for (let i=0; i < arguments[0].length; i++){
        for (let j=1; j<arguments.length; j++){
            if (arguments[0][i] === arguments[j]){
                continue arrayCycle;
            }
        }
        newArray.push(arguments[0][i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
