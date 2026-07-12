import { describe, it, expect } from "vitest";
import { generateQRCode } from "../js/services/qrService";

describe("QR Service", () => {

    it("should throw an error for empty input", () => {

        expect(() => generateQRCode(""))
            .toThrow("Input cannot be empty");

    });

});