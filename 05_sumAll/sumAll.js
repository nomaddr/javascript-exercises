const sumAll = function(x, n) {

    if (typeof x != "number" || typeof n != "number") return "ERROR";
    if (x < 0 || n < 0) return "ERROR";
    if (x === 1) return n*(n+1)/2;
    if (!Number.isInteger(x) || !Number.isInteger(n)) return "ERROR";
    
    let small = x;
    let big = n;
    if (x > n){
        small = n;
        big = x;
    }

    let sum = 0;
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
