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


generateBtn.addEventListener("click", async() => {

    const input = textInput.value;

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