const ones = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tens = [
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

module.exports = function toReadable(number) {
  let result = '';
  if (number < 10) {
    result += ones[number];
  } else if (number < 20) {
    result += teens[number - 10];
  } else if (number < 100) {
    result += tens[Math.floor(number / 10) - 2];
    if (number % 10 !== 0) {
      result += ` ${ones[number % 10]}`;
    }
  } else {
    const rest = number % 100;
    result += `${ones[Math.floor(number / 100)]} hundred`;
    if (rest !== 0) {
      result += ' ';
      if (rest < 10) {
        result += ones[rest];
      } else if (rest < 20) {
        result += teens[rest - 10];
      } else {
        result += tens[Math.floor(rest / 10) - 2];

        if (rest % 10 !== 0) {
          result += ` ${ones[rest % 10]}`;
        }
      }
    }
  }

  return result;
};
