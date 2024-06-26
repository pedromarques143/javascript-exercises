const sumAll = function(numberOne, numberTwo) {
    if (numberOne < 0 || numberTwo < 0 ) {
        return "ERROR";
    } else if (typeof numberOne != "number" || typeof numberTwo != "number" ) {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
