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
