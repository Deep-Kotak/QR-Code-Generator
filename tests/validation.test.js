import { describe, it, expect } from "vitest";
import { isValidInput } from "../js/utils/validation";

describe("Input Validation", () => {

    it("should return false for empty string", () => {

        expect(isValidInput("")).toBe(false);

    });

    it("should return false for only spaces", () => {

        expect(isValidInput("     ")).toBe(false);

    });

    it("should return true for normal text", () => {

        expect(isValidInput("Hello")).toBe(true);

    });

    it("should return true for valid URL", () => {

        expect(isValidInput("https://google.com")).toBe(true);

    });

});