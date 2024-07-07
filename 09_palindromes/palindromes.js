const palindromes = function (userText) {
    let textArr = [];
    textArr = [...userText];

    const simpleArr = textArr.filter(element => element != "!" && element != "." && element != "," && element != " ");
    const invertedArr = simpleArr.toReversed();

    let simpleStr = simpleArr.toString().toLowerCase();
    let invertedStr = invertedArr.toString().toLowerCase();

    if (simpleStr == invertedStr) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
