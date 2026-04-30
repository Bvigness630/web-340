/**
 * Author: Boyd Vigness
 * Date: 4/26/2026
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

describe("bakePie function", () => {

  test("should successfully bake a pie with all essential ingredients", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(result).toBe("Successfully baked a apple pie!");
  });

  test("should successfully bake a pie with extra ingredients", () => {
    const result = bakePie("cherry", ["flour", "sugar", "butter", "cherries", "salt"]);
    expect(result).toBe("Successfully baked a cherry pie!");
  });

  test("should exit process if an essential ingredient is missing", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

    bakePie("pumpkin", ["flour", "sugar"]); // missing butter

    expect(mockWarn).toHaveBeenCalledWith("Missing essential ingredient: butter");
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockWarn.mockRestore();
  });

});