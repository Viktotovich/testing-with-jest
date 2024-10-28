import { functionController } from "./main-functions";

test("it works", () => {
  expect(functionController.isWorking()).toBe(true);
});

//Capitalization
test("Capitalization", () => {
  expect(functionController.capitalize("vova")).toBe("Vova");
});

test("Capitalization pt II", () => {
  expect(functionController.capitalize("non-capital")).toBe("Non-capital");
});

//String Reversal
test("If string is reversed", () => {
  expect(functionController.reverseString("jest")).toBe("tsej");
});

test("If string is reversed pt II", () => {
  expect(
    functionController.reverseString(
      "There are 12 chickens in the chicken coup"
    )
  ).toBe("puoc nekcihc eht ni snekcihc 21 era erehT");
});

//Calculator
test("Calculator Adds", () => {
  expect(functionController.calculator.add(2, 2)).toBe(4);
});

test("Calculator Subtracts", () => {
  expect(functionController.calculator.subtract(99, 33)).toBe(66);
});

test("Calculator Divides", () => {
  expect(functionController.calculator.divide(99, 2)).toBe(49.5);
});

test("Calculator Multiplies", () => {
  expect(functionController.calculator.multiply(100, 50)).toBe(5000);
});

test("Calculator deals with JS quirks", () => {
  expect(functionController.calculator.add("0.1", "0.2")).toBe(0.3);
});

//Ceasar Cipher
test("Caesar cipher performs basic cipher", () => {
  expect(functionController.caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar cipher preserves cases", () => {
  expect(functionController.caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Caesar cipher preserves punctuation", () => {
  expect(functionController.caesarCipher("Hello, World!", 3)).toBe(
    "Khoor, Zruog!"
  );
});

test("Caesar cipher is not a fluke, and works with different shift factors", () => {
  expect(
    functionController.caesarCipher(
      "Oman in the summer is actually a great place to be!",
      -10
    )
  ).toBe("Ecqd yd jxu ikccuh yi qsjkqbbo q whuqj fbqsu je ru!");
});

test("Caesar cipher is not a fluke, and works with different shift factors pt II", () => {
  expect(
    functionController.caesarCipher(
      "Oman in the summer is actually a great place to be!",
      8
    )
  ).toBe("Wuiv qv bpm acuumz qa ikbcittg i ozmib xtikm bw jm!");
});

//Array Analyzer
const testArr = [1, 8, 3, 4, 2, 6];
const testObj = functionController.analyseArray(testArr);

test("Returns an Object with correct keys", () => {
  expect(functionController.analyseArray(testArr)).toHaveProperty("average");
  expect(functionController.analyseArray(testArr)).toHaveProperty("min");
  expect(functionController.analyseArray(testArr)).toHaveProperty("max");
  expect(functionController.analyseArray(testArr)).toHaveProperty("length");
});

test("Keys contain correct values", () => {
  expect(testObj.average).toBe(4);
  expect(testObj.min).toBe(1);
  expect(testObj.max).toBe(8);
  expect(testObj.length).toBe(6);
});
