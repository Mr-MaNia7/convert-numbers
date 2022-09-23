/**
 * Converts numbers to English numerals.
 * @param {number} num The number to be converted, numbers only from 0 to 999,999,999 are supported! Otherwise an Error is thrown.
 * @return {string}
 */
 function toNumeralsEN(num) {
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
      return ones[numString[0]] + ' hundred ' + toNumeralsEN(+(numString[1] + numString[2]));
    }
    // 1000 - 9999
    else if (numString.length === 4) {
      var end = +(numString.slice(1));
      if (end === 0) return ones[numString[0]] + ' thousand';
      else if (end < 100) return ones[numString[0]] + ' thousand ' + toNumeralsEN(end);
      return ones[numString[0]] + ' thousand ' + toNumeralsEN(end);
    }
    // 10,000 - 99,999
    else if (numString.length === 5) {
      var end = +(numString.slice(2));
      if (end === 0) return toNumeralsEN(numString.slice(0, 2)) + ' thousand';
      return toNumeralsEN(numString.slice(0, 2)) + ' thousand ' + toNumeralsEN(end);
    }
    // 100,000 - 999,999
    else if (numString.length === 6) {
      var end = +(numString.slice(3));
      if (end === 0) return toNumeralsEN(numString.slice(0, 3)) + ' thousand';
      return toNumeralsEN(numString.slice(0, 3)) + ' thousand ' + toNumeralsEN(end);
    }
    // 1,000,000 - 9,999,999
    else if (numString.length === 7) {
      var end = +(numString.slice(1));
      if (end === 0) return ones[numString[0]] + ' million';
      else if (end < 100) return ones[numString[0]] + ' million ' + toNumeralsEN(numString.slice(5));
      return ones[numString[0]] + ' million ' + toNumeralsEN(end);
    }
    // 10,000,000 - 99,999,999
    else if (numString.length === 8) {
      var end = +(numString.slice(2));
      if (end === 0) return toNumeralsEN(numString.slice(0, 2)) + ' million';
      return toNumeralsEN(numString.slice(0, 2)) + ' million ' + toNumeralsEN(end);
    }
    // 100,000,000 - 999,999,999
    else if (numString.length === 9) {
      var end = +(numString.slice(3));
      if (end === 0) return toNumeralsEN(numString.slice(0, 3)) + ' million';
      return toNumeralsEN(numString.slice(0, 3)) + ' million ' + toNumeralsEN(end);
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
function toFormattedNumeral(num) {
  var numeral = toNumeralsEN(num);
  return numeral[0].toUpperCase() + numeral.slice(1);
}

/**
 * Converts numbers to English currency.
 * @param {number} num The number to be formatted as a word currency, decimal numbers in the range 0.00 to 999,999,999.99 are supported! Otherwise an Error is thrown.
 * @return {string}
 */
function toCurrencyEN(num) {
  try {
    var numString = num.toString();
    var dotPos = numString.indexOf('.');
    var numString = num.toPrecision(dotPos + 2).toString();
    if (dotPos > 0) {
      var currency = toFormattedNumeral(+numString.slice(0, dotPos)) + ' dollars ' + toNumeralsEN(+numString.slice(dotPos + 1)) + ' cents';
      return currency;
    }
    else throw new Error("Number not supported as a currency.")
  }
  catch (error) {
    return error;
  }
}

console.log(toCurrencyEN(2002205.5));
