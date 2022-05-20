function nextChar(char, interval) {
  return String.fromCharCode(char.charCodeAt(0) + interval);
}

function checkUpperCase(string) {
  if (string === string.toUpperCase()) {
    return true;
  }
  return false;
}

function checkLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
}

function ceaserCipher(string, interval) {
  const stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i += 1) {
    if (!stringArray[i].match('\\p{Punct}') && !stringArray[i].match(/^\s+$/)) {
      stringArray[i] = nextChar(stringArray[i], interval);

      if (checkLowerCase(stringArray[i])
      && stringArray[i].charCodeAt(0) > 122) {
        stringArray[i] = String.fromCharCode(96 + interval);
      } else if (checkUpperCase(stringArray[i])
       && stringArray[i].charCodeAt(0) > 90) {
        stringArray[i] = String.fromCharCode(64 + interval);
      }
    }
  }

  return stringArray.join('');
}

module.exports = ceaserCipher;

// if (Char.matches("\\p{Punct}", str)){

// }
