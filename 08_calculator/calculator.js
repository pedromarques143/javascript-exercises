const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	const array = [];
  for (let i = 1; i <= number; i++) {
    array.push(i);
  }
  if (number === 0) {
    return 1;
  } else {
    return array.reduce((total, current) => total * current);
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
