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
