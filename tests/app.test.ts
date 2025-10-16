import { AppTest } from "../src/app";

describe("App behaviour", () => {
  let app: AppTest;

  beforeEach(() => {
    app = new AppTest();
  });

  test("shouldAnswerWithTrue returns true", () => {
    expect(app.shouldAnswerWithTrue()).toBe(true);
  });

  test("shouldAnswerWithFalse returns false", () => {
    expect(app.shouldAnswerWithFalse()).toBe(false);
  });
});
