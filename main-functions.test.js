import { functionController } from "./main-functions";

test("it works", () => {
  expect(functionController.isWorking()).toBe(true);
});
