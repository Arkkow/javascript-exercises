const palindromes = function (word) {
    let wordSplit = word.split("");
    let arrayReverse = wordSplit.reverse()
    let arrayJoin = arrayReverse.join("")
    if (word == arrayJoin) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
