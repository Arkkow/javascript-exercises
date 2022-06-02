const add = function (numberOne, numberTwo) {
  return (numberOne + numberTwo);
};

const subtract = function (numberOne, numberTwo) {
  return (numberOne - numberTwo);
};

const sum = function (array) {
  let sumArray = 0;
  for (let i = 0; i <= array.length; i++) {
    sumArray = sumArray + array[i];
  }
};

const multiply = function (numberOne, numberTwo) {
  return (numberOne * numberTwo);
};

const power = function (number, pow) {
  return (math.powe(number, pow))
};

const factorial = function (number) {
  if (number < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (number * factorial(num - 1))
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
