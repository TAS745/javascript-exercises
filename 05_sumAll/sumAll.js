const sumAll = function(num1, num2) {
    const args = [num1, num2];
    args.sort();

    let sum = 0;

    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }else if(typeof num1 === "number" && typeof num2 === "number") {
        for (let i = args[0]; i <= args[1]; i++) {
            sum += i;
        }
    }else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
