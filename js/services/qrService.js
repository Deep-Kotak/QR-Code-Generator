import QRCode from "qrcode";
import { isValidInput } from "../utils/validation.js";

export async function generateQRCode(input) {

    if (!isValidInput(input)) {
        throw new Error("Input cannot be empty");
    }

    return await QRCode.toDataURL(input);

}