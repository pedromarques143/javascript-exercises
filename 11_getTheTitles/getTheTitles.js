const getTheTitles = function(books) {
    const titlesArr = [];
    for (let book of books) {
        titlesArr.push(book.title);
    }
    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
