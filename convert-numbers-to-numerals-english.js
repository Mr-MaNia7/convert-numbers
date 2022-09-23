/**
 * Converts numbers to numerals and returns lowercase string.
 * @param {number} num The number to be converted, numbers only from 0 to 999,999,999 are supported! Otherwise an Error is thrown.
 * @return {string}
 */
function convertNumbersToWords(num) {
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];
  var zero = 'zero';
  var numString = num.toString();

  try {
    // 0
    if (num === 0) return zero;
    // 1 - 20
    else if (num < 20) {
      return ones[num];
    }
    // 20 - 99
    else if (numString.length === 2) {
      var end = +(numString[1]);
      if (end === 0) return tens[numString[0]];
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
    // 100 - 999 
    else if (numString.length == 3) {
      var end = +(numString.slice(1))
      if (end === 0)
        return ones[numString[0]] + ' hundred';
      return ones[numString[0]] + ' hundred ' + convertNumbersToWords(+(numString[1] + numString[2]));
    }
    // 1000 - 9999
    else if (numString.length === 4) {
      var end = +(numString.slice(1));
      if (end === 0) return ones[numString[0]] + ' thousand';
      else if (end < 100) return ones[numString[0]] + ' thousand ' + convertNumbersToWords(end);
      return ones[numString[0]] + ' thousand ' + convertNumbersToWords(end);
    }
    // 10,000 - 99,999
    else if (numString.length === 5) {
      var end = +(numString.slice(2));
      if (end === 0) return convertNumbersToWords(numString.slice(0, 2)) + ' thousand';
      return convertNumbersToWords(numString.slice(0, 2)) + ' thousand ' + convertNumbersToWords(end);
    }
    // 100,000 - 999,999
    else if (numString.length === 6) {
      var end = +(numString.slice(3));
      if (end === 0) return convertNumbersToWords(numString.slice(0, 3)) + ' thousand';
      return convertNumbersToWords(numString.slice(0, 3)) + ' thousand ' + convertNumbersToWords(end);
    }
    // 1,000,000 - 9,999,999
    else if (numString.length === 7) {
      var end = +(numString.slice(1));
      if (end === 0) return ones[numString[0]] + ' million';
      else if (end < 100) return ones[numString[0]] + ' million ' + convertNumbersToWords(numString.slice(5));
      return ones[numString[0]] + ' million ' + convertNumbersToWords(end);
    }
    // 10,000,000 - 99,999,999
    else if (numString.length === 8) {
      var end = +(numString.slice(2));
      if (end === 0) return convertNumbersToWords(numString.slice(0, 2)) + ' million';
      return convertNumbersToWords(numString.slice(0, 2)) + ' million ' + convertNumbersToWords(end);
    }
    // 100,000,000 - 999,999,999
    else if (numString.length === 9) {
      var end = +(numString.slice(3));
      if (end === 0) return convertNumbersToWords(numString.slice(0, 3)) + ' million';
      return convertNumbersToWords(numString.slice(0, 3)) + ' million ' + convertNumbersToWords(end);
    }
    // < 0 or > 999,999,999
    else if (num < 0 || num > 999, 999, 999) {
      throw new Error('Numbers only from 0 to 999,999,999 are supported!');
    }
  }
  catch (error) {
    return error;
  }
}

/**
 * Formats numerals converted.
 * @param {number} num The number to be changed and formatted to numeral.
 */
 function formattedNumeral(num) {
    var numeral = convertNumbersToWords(num);
    return numeral[0].toUpperCase() + numeral.slice(1);
}

console.log(formattedNumeral(200220565));