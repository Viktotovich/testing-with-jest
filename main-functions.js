const functionController = {
  isWorking: function () {
    return true;
  },
  capitalize: function (string) {
    let firstLetter = string.slice(0, 1).toUpperCase();
    return firstLetter + string.slice(1);
  },
  reverseString: function (string) {
    let reverseStringArr = [];
    for (let i = string.length - 1; i >= 0; i--) {
      reverseStringArr.push(string[i]);
    }

    return reverseStringArr.join("");
  },
  calculator: {
    add: function (numA, numB) {
      numA = this.coerceNumberType(numA);
      numB = this.coerceNumberType(numB);

      if (numA < 1 || numB < 1) {
        return this.safeAdd(numA, numB);
      } else {
        return numA + numB;
      }
    },
    safeAdd: function (numA, numB) {
      return this.coerceNumberType(parseFloat(numA + numB).toPrecision(1));
    },
    subtract: function (numA, numB) {
      return numA - numB;
    },
    divide: function (numA, numB) {
      return numA / numB;
    },
    multiply: function (numA, numB) {
      return numA * numB;
    },
    coerceNumberType: function (num) {
      let safeNumber = Number(num);
      return safeNumber;
    },
  },
  caesarCipher: function (string, shiftFactor) {
    if (shiftFactor < 0) {
      /*if the shift factor is negative, we go back the length of the alphabet. In this case, -3 and 23 will be the same */
      shiftFactor = shiftFactor + 26;
    }

    if (shiftFactor < -26 || shiftFactor > 26) {
      shiftFactor = shiftFactor % 26;
    }

    let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    function getCipheredLetter(letter) {
      if (letter === letter.toUpperCase()) {
        return processLetter(letter, upperCaseAlphabet);
      } else {
        return processLetter(letter, lowerCaseAlphabet);
      }
    }

    function processLetter(letter, arr) {
      let index = arr.indexOf(letter);
      if (index === -1) {
        return letter;
      } else {
        index += shiftFactor;
        if (index > 25) {
          index -= 26;
          console.log(index);
          return arr[index];
        } else {
          console.log(index);
          return arr[index];
        }
      }
    }

    let cypheredStringArr = [];
    for (let i = 0; i < string.length; i++) {
      cypheredStringArr.push(getCipheredLetter(string[i]));
    }

    return cypheredStringArr.join("");
  },
};

functionController.caesarCipher("xyz", 3);
export { functionController };
