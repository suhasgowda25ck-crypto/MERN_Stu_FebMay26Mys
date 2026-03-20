const question = document.getElementById("question");
const answer = document.getElementById("answer");
const addFaqBtn = document.getElementById("addFaqBtn");
const faqContainer = document.getElementById("faqContainer");
const error = document.getElementById("error");
const emptyMsg = document.getElementById("emptyMsg");

addFaqBtn.addEventListener("click", function() {
    const q = question.value.trim();
    const a = answer.value.trim();

    if(!q || q.length < 5){
        error.textContent = "Question must be at least 5 characters";
        error.style.color = "red";
        question.focus();
        return;
    }
    if(!a || a.length < 15){
        error.textContent = "Answer must be at least 15 characters.";
        error.style.color = "red";
        answer.focus();
        return;
    }

    error.textContent = "";

    const faq = document.createElement("div");
    faq.className = "faq";
    faq.innerHTML = `
        <h3>${q}</h3>
        <p>${a}</p>
        <button class="deleteBtn">Delete</button>
    `;

    
    const h3 = faq.querySelector("h3");
    h3.insertAdjacentHTML("beforeend", " <span>FAQ</span>");

    
    const delBtn = faq.querySelector(".deleteBtn");
    delBtn.addEventListener("click", function() {
        faq.remove();
        if(faqContainer.children.length === 0) emptyMsg.style.display = "block";
    });

    
    faqContainer.appendChild(faq);

    question.value = "";
    answer.value = "";

    emptyMsg.style.display = "none";

    error.textContent = "FAQ added successfully!";
    error.style.color = "green";
});