document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navopt a,homebtn a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = 96;
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    });
});
