export function generateQRCode(input) {

    if (input.trim().length === 0) {
        throw new Error("Input cannot be empty");
    }

    return input;

}