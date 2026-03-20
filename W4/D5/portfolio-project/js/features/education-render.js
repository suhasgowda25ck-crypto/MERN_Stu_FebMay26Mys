const eduContainer = document.getElementById("education-container");

education.forEach(item => {
    const card = document.createElement("div");

   card.className = "bg-white p-6 rounded shadow hover:scale-105 transition-transform duration-300";
    card.innerHTML = `
        <h3 class="text-xl font-bold">${item.degree}</h3>
        <p class="text-gray-600">${item.institution}</p>
        <p class="text-sm text-gray-500">${item.year}</p>
        <p class="mt-2">${item.description}</p>
    `;

    eduContainer.appendChild(card);
});