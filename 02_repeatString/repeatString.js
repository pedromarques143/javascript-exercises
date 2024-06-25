const repeatString = function(sentence, reps) {
    const senteceArr = [reps - 1];
    if (reps == 0) {
        return '';
    } else if (reps < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < reps; i++) {
            senteceArr[i] = sentence;
        }
    return senteceArr.join("");
    }
}
// Do not edit below this line
module.exports = repeatString;
