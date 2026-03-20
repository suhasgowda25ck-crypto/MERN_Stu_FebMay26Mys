const certificatesContainer = document.getElementById("certificates-container");

certificatesData.forEach(cert => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded shadow hover:scale-105 transition-transform duration-300";

    card.innerHTML = `
        <h3 class="text-xl font-bold">${cert.title}</h3>
        <p class="text-gray-600 font-semibold">${cert.platform} | ${cert.date}</p>
        <p class="mt-2 text-gray-500">${cert.description}</p>
        <a href="${cert.link}" target="_blank" class="mt-4 inline-block text-blue-600 hover:underline">View Certificate</a>
    `;

    certificatesContainer.appendChild(card);
});