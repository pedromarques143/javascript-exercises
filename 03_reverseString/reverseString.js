const reverseString = function(sentence) {
    let sentenceLen = sentence.length;
    const revertedSentence = [sentenceLen - 1];
    if (sentenceLen == 0) {
        return "";
    } else {
        for (let i = 0; i < sentence.length; i++) {
            revertedSentence[i] = sentence[sentenceLen - 1 - i];
        }
    }
    return revertedSentence.join("");
};

// Do not edit below this line
module.exports = reverseString;
