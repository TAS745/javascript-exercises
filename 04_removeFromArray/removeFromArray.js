const removeFromArray = function() {
    const args = [...arguments];
    let arrayNew = args[0];
    for (let i = 1; i < args.length; i++) {
         arrayNew = arrayNew.filter(function(item) {
            return item !== args[i];
         })
    }
    return arrayNew;
};

// Do not edit below this line
module.exports = removeFromArray;
