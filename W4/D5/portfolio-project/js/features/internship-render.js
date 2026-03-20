const internshipContainer = document.getElementById("internship-container");

internships.forEach(item => {
    const card = document.createElement("div");

    card.className = "bg-white p-6 rounded shadow hover:scale-105 transition";

    card.innerHTML = `
        <h3 class="text-xl font-bold">${item.role}</h3>
        <p class="text-gray-600">${item.company}</p>
        <p class="text-sm text-gray-500">${item.duration}</p>
        <p class="mt-2">${item.description}</p>
    `;

    internshipContainer.appendChild(card);
});