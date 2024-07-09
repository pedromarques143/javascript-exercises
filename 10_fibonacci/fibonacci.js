const fibonacci = function(number) {
    const arr = [0, 1]
    
    if (number >= 0) {
        for (let i = 2; i <= number; i++) {
            arr[i] = Number(arr[i - 1] + arr[i - 2]);
        }

        return arr[number];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
