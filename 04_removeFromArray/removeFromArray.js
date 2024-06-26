
const removeFromArray = function(userArray, ...toDelete) {
    for (let delElement of toDelete) {
        for (let element of userArray) {
            if (userArray[element] == delElement) {
                userArray.splice(element, 1);
            }
        }
    }

    for (let i = 0; 0 < userArray.length; i++) {
        let tempOne = userArray[i - 1];
        let tempTwo = userArray[i];

        if (tempOne == tempTwo) {
            userArray.splice(i, 1);
            userArray.splice(i - 1);
        }

    }
    return userArray;
}

// Do not edit below this line
module.exports = removeFromArray;


//delItems = Array.from(toDelete);
//for (let i = 0; i < userArray.length; i++) {
//    for (let x = 0; x < delItems.length; x++) {       
//        if (userArray.includes(delItems[x])) {
//            userArray.splice(i, 1);
//        }
//    }
//}
//return userArray;