import "./style.css";

import { isValidInput } from "./utils/validation.js";
import { generateQRCode } from "./services/qrService.js";


const textInput = document.getElementById("textInput");
const sizeSelect = document.getElementById("sizeSelect");
const foregroundColor = document.getElementById("foregroundColor");
const backgroundColor = document.getElementById("backgroundColor");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrPreview = document.getElementById("qrPreview");
const message = document.getElementById("message");

let currentQRCode = "";
downloadBtn.disabled = true;

generateBtn.addEventListener("click", async() => {

    const input = textInput.value;
    console.log("Input:", `"${input}"`);
    console.log("Length:", input.length);
    console.log("Trim Length:", input.trim().length);
    console.log("Valid:", isValidInput(input));

    const size = sizeSelect.value;

    const dark = foregroundColor.value;

    const light = backgroundColor.value;


    if (!isValidInput(input)) {

        message.textContent = "Please enter text or URL.";

        qrPreview.innerHTML = "<p>Your QR Code will appear here.</p>";

        return;

    }

    try {


        const qrCode = await generateQRCode(
            input,
            size,
            dark,
            light
        );
        currentQRCode = qrCode;
        downloadBtn.disabled = false;


        qrPreview.innerHTML = `
            <img
                src="${qrCode}"
                alt="Generated QR Code">
        `;

        message.textContent = "✅ QR Code Generated Successfully!";

    } catch (error) {

        console.error(error);

        message.textContent = "❌ Failed to generate QR Code.";

    }

});
clearBtn.addEventListener("click", () => {


    textInput.value = "";


    sizeSelect.value = "300";


    foregroundColor.value = "#000000";
    backgroundColor.value = "#ffffff";


    qrPreview.innerHTML = `
        <p>Your QR Code will appear here.</p>
    `;


    message.textContent = "No QR Code Generated";
    currentQRCode = "";
    downloadBtn.disabled = true;

});

downloadBtn.addEventListener("click", () => {

    if (!currentQRCode) {

        message.textContent = "Please generate a QR Code first.";

        return;

    }

    const link = document.createElement("a");

    link.href = currentQRCode;

    link.download = "qr-code.png";

    link.click();

});