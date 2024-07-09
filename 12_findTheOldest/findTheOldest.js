const findTheOldest = function(peopleArray) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    const newArray = peopleArray;

    for (let person of newArray) {
        if (person.yearOfDeath > 0) {
            person.yearsLived = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.yearsLived = currentYear - person.yearOfBirth;
        }
    }

    return oldestPerson = newArray.reduce((previous, current) => 
        previous.yearsLived > current.yearsLived ? previous : current);
};

// Do not edit below this line
module.exports = findTheOldest;
