const { execSync } = require("child_process");

describe("e2e tests", () => {
  test("it should correctly calculate the character count", () => {
    const output = "" + execSync("ccwc -c ../test.txt").toString().trim();
    expect(output).toBe("335039 ../test.txt");
  });
  test("it should correctly calculate the word count", () => {
    const output = execSync("ccwc -w ../test.txt").toString().trim();
    expect(output).toBe("60175 ../test.txt");
  });
  test("it should correctly calculate the line count", () => {
    const output = execSync("ccwc -l ../test.txt").toString().trim();
    expect(output).toBe("7142 ../test.txt");
  });
  test("it should correctly calculate all the flags", () => {
    const output = execSync("ccwc -cwl ../test.txt").toString().trim();
    expect(output).toBe("7142 60175 335039 ../test.txt");
  });
});
