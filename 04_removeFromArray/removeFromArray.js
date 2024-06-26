
const removeFromArray = function(userArray, ...toDelete) {
    const newArray = [];

    for (let element of userArray) {
        if (!toDelete.includes(element)) {
            newArray.push(element);
        }
    }

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

