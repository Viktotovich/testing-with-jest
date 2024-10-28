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
};

functionController.reverseString("Vlad");
export { functionController };
