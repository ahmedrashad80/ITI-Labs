const { capitalizeTextFirstChar, createArray, random } = require("../lab1");

describe("test capitalization", () => {
  it("should return the string after capitalizing every word's first character", () => {
    expect(capitalizeTextFirstChar("i'm ahmed ali")).toEqual("I'm Ahmed Ali");
  });
  it("should return type to be a string", () => {
    expect(typeof capitalizeTextFirstChar("i'm ahmed ali")).toBe("string");
  });
  it("should throw an error when the input is not a string", () => {
    expect(() => capitalizeTextFirstChar(12)).toThrow();
  });
});

describe("test array creation", () => {
  it("should return type to be an array", () => {
    expect(Array.isArray(createArray(3))).toBe(true);
  });
  it("should return an array of specified length", () => {
    expect(createArray(3)).toEqual([0, 1, 2]);
  });
  it("should not include the specified number in the array", () => {
    expect(createArray(3)).not.toContain(3);
  });
});

describe("test random number", () => {
  it("should return a number", () => {
    expect(typeof random(1, 10)).toBe("number");
  });
  it("should return a number in the specified range", () => {
    const num = random(1, 10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
  });
  it("should return NaN when only one parameter is provided", () => {
    expect(isNaN(random(1))).toBe(true);
  });
});
