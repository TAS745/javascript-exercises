const ftoc = function(temp) {
  let tempF = 5*(temp-32)/9;
  return Number(tempF.toFixed(1));
};

const ctof = function(temp) {
  let tempC = (9*temp/5)+32;
  return Number(tempC.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
