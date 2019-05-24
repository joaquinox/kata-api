/* Nice simple solution. Could have used template literals instead of single quotes for something a little more concise.

return `Hello, ${string}!`
*/ 
const sayHello = (string) => {
  return 'Hello, ' + string + '!';
};

//Good job!
const uppercase = (string) => {
  return string.toUpperCase();
};

//Good job!
const lowercase = (string) => {
  return string.toLowerCase();
};

//Good job!
const countCharacters = (string) => {
  return string.length;
};

//Works fine, but probably should be looking at using the string method string.charAt(0)

const firstCharacter = (string) => {
  return string.charAt[0];
};

//Good job!
const firstCharacters = (string, n) => {
  return string.substring(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
