const sumAll = function(numberOne, numberTwo) {
    if (numberOne < 0 || numberTwo < 0 ) {
        return "ERROR";
    } else if (typeof numberOne != "number" || typeof numberTwo != "number" ) {
        return "ERROR";
    } else {
        const numberArr = [];
        if (numberOne < numberTwo) {
            for (let i = numberOne + 1; i < numberTwo; i++) {
                numberArr.push(i);
            }
        } else {
            for (let i = numberTwo + 1; i < numberOne; i++) {
                numberArr.push(i);
            }            
        }
        let totalSum = numberOne + numberTwo;

        for (let i = 0; i < numberArr.length; i++) {
            totalSum += numberArr[i];
        }

        return totalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
