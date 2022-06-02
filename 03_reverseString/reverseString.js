const reverseString = function (word) {
    let wordSplit = word.split("");
    let arrayReverse = wordSplit.reverse()
    let arrayJoin = arrayReverse.join("")
    return (arrayJoin)
};


// Do not edit below this line
module.exports = reverseString;
