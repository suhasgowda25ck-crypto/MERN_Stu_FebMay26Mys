const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeSelect = document.getElementById("feedbackType");
const feedbackInput = document.getElementById("feedback");
const submitBtn = document.getElementById("submitFeedback");
const feedbackContainer = document.getElementById("feedbackContainer");
const errorMsg = document.getElementById("error");

submitBtn.addEventListener("click", function(){
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const type = typeSelect.value;
    const text = feedbackInput.value.trim();
});