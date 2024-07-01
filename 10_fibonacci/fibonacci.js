const fibonacci = function(n) {
    fib = [0,1,1];
    n = +n;
    if (n<0){
        return "OOPS";
    }
    for (let i=2; i < n; i++){
        fib.push(fib[i]+fib[i-1]);
    }
    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
