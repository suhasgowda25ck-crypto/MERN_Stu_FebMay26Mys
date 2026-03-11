//innerText & textContent
//innerText: visible rendered text only
//textContent: all text nodes regardless of css

const message = document.getElementById("message");
const textContentBtn = document.getElementById("textContenBtn"); // match your HTML ID

document.getElementById("innerTextBtn").addEventListener("click", function() {
    message.innerText = "updated using InnerText";
});

textContentBtn.addEventListener("click", function() {
    message.textContent = "updated using textContentBtn";
});

document.getElementById("ResetBtn").addEventListener("click", function() {
    message.innerText = "original message";
});

const box = document.getElementById("box");
document.getElementById("innerHtmlBtn").addEventListener("click", function() {
    box.innerHTML = "<strong>Original</strong> content";
});