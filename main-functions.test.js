import { functionController } from "./main-functions";

test("it works", () => {
  expect(functionController.isWorking()).toBe(true);
});

test("Capitalization", () => {
  expect(functionController.capitalize("vova")).toBe("Vova");
});

test("Capitalization pt II", () => {
  expect(functionController.capitalize("non-capital")).toBe("Non-capital");
});

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
