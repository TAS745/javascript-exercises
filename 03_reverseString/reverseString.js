const reverseString = function(string) {
    let reverse = "";
    for (let i=1; i <= string.length; i++) {
        if(i===1) {
            reverse = reverse.concat(string.slice(-i));
            continue;
        }
        reverse = reverse.concat(string.slice(-i,-i+1));
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
