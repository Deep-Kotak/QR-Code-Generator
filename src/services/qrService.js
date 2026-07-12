import QRCode from "qrcode";
import { isValidInput } from "../utils/validation.js";



export async function generateQRCode(
    input,
    size = 300,
    dark = "#000000",
    light = "#ffffff"
) {

    if (!isValidInput(input)) {
        throw new Error("Input cannot be empty");
    }

    return await QRCode.toDataURL(input, {
        width: Number(size),
        color: {
            dark,
            light
        }
    });

}