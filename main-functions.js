const functionController = {
  isWorking: function () {
    console.log("ffs jest work");
    return true;
  },
  capitalize: function (string) {
    let firstLetter = string.slice(0, 1).toUpperCase();
    return firstLetter + string.slice(1);
  },
};

export { functionController };
