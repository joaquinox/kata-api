//All answers are absolutely fine and passable, well done. Would possibly use the method of Math.pow(a, b) instead of ** as some operators aren't compatible with Internet Explorer, but either is fine in this case.

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = (a) => {
  return Math.round(a);
};

const roundUp = (a) => {
  return Math.ceil(a);
};

const roundDown = (a) => {
  return Math.floor(a);
};

const absolute = (a) => {
  return Math.abs(a);
};

const quotient = (a, b) => {
  return parseInt(a / b);
};

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
