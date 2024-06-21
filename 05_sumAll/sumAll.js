const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return("ERROR");
    }
    else if (num1 < 0 || num2 < 0){
        return("ERROR");
    }
    
    let smallNumber, bigNumber;
    if (num1<num2){
        smallNumber = num1;
        bigNumber = num2;
    }
    else{
        smallNumber = num2;
        bigNumber = num1;
    }
    let sum = 0;
    for (let i=smallNumber; i<=bigNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
