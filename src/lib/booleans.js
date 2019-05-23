// Really good effort on most of these. I've added some simplified versions of thr code you wrote to pass the tests with the aim of keeping this as DRY as possible.

const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b === true;
};

/*const both = (a, b) => {
  return a && b === true;
};
*/

const either = (a, b) => {
  return a || b;
};

/*
const either = (a, b) => {
  return a || b;
};
*/

const none = (a, b) => {
  return !a && !b;
};

/*
const none = (a, b) => {
  return !a && !b
};
*/

const one = (a, b) => {
  return (a === true && b === !true || a === !true && b === true);
};

/*
Personally, I would use an IF ELSE statement here but it's personal preference really.

const one = (a, b) => {
  if (a && b) {
    return false
  } else if (a || b) {
    return true
  } else {
    return false
  }
};
*/

const truthiness = (a) => {
  return a ? true : false;
};

/*
const truthiness = (a) => {
  return a ? true : false
};
*/

const isEqual = (a, b) => {
  return a === b;
};


const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  return (a % 2) === 1;
};

/*
const isOdd = (a) => {
  return (a % 2) === 1
};
*/

const isEven = (a) => {
  return (a % 2) === 0;
};

/*
const isEven = (a) => {
  return (a % 2) === 0
};
*/

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0;
};

/*
const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0;
};
*/

const startsWith = (char, string) => {
  return string.startsWith(char);
};

const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (string.toLowerCase().indexOf(vowels[i]) !== -1) {
      return true;
    }
  }
  return false;
};

/*
So this uses regex, the match method and toLowerCase to match the letters in the string then return as a boolean after making everything lower case.

const containsVowels = (string) => {
  return string.toLowerCase().match(/[a,e,i,o,u]/g) ? true : false
};
*/

const isLowerCase = (string) => {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

/* 
Same deal as above with regex but this time we search for all capital letters in the alphabet before returning a boolean value based on what it finds.
const isLowerCase = (string) => {
  return string.match(/[A-Z]/g) ? false : true
};
*/

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
