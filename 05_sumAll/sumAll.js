const sumAll = function (startNumber, lastNumber) {
    let sum = 0;
    for (let i = startNumber; i <= lastNumber; i++) {
        sum = sum + i;
    }
    return sum
};


// Do not edit below this line
module.exports = sumAll;
