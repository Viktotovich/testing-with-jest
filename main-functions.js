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
    /* 
    Reqs: shift factor, lettercases, punctuations, spaces, etc.
    */
  },
};

functionController.reverseString("Vlad");
export { functionController };
