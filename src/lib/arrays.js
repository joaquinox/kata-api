const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  }
  index = index - array.length;
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.join(',');
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = (numbers) => {
  return numbers.filter(n => n % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(a => a !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter(string => {
    return vowels.includes(string[0].toLowerCase());
  });
};

const removeSpaces = (string) => {
  return string.replace(/ /g, '');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
}; 
