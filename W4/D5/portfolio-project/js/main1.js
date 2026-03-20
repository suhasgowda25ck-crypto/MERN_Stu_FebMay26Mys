document.addEventListener("DOMContentLoaded", function () {
    // Back-to-Top Button Logic
    const backToTopBtn = document.getElementById("back-to-top");

    // Show button when scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = 1;
        } else {
            backToTopBtn.style.opacity = 0;
        }
    });

    // Smooth scroll to top on click
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});