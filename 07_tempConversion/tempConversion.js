const ftoc = function (tempFah) {
  return ((tempFah - 32) * 5 / 9)
};

const ctof = function (tempCel) {
  return (tempCel * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
