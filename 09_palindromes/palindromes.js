const palindromes = function (input) {
    input = input.replace(/\W/g, '');
    input = input.toLowerCase().split('');
    return input.every((value,index)=> 
    value === input[input.length - 1 - index]);
};
// Do not edit below this line
module.exports = palindromes;
