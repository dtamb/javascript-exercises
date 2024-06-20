const repeatString = function(inputString,number) {
    let outputString = ""
    if (number <0){
        outputString ="ERROR";
    }
    else{
        for (let i=0; i<number; i++){
            outputString += inputString;
        }
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
