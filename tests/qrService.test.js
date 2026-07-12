import { describe, it, expect } from "vitest";
import { generateQRCode } from "../js/services/qrService";

describe("QR Service", () => {

    it("should throw an error for empty input", async() => {

        await expect(generateQRCode(""))
            .rejects
            .toThrow("Input cannot be empty");

    });

    it("should return a QR Code Data URL for valid input", async() => {

        const qrCode = await generateQRCode("Hello World");

        expect(qrCode).toContain("data:image/png;base64");

    });

});