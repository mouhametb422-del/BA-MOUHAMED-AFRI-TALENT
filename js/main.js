// COMMIT 6
// JS : Dark Mode + localStorage
// Navbar dynamique au scroll
// Bouton Retour en haut
document.addEventListener("DOMContentLoaded", () => {

    // DARK MODE + lOCALSTRAGE
    const body = document.body;
    const toggleBtn = document.getElementById("theme-toggle");

    // Charger le thème sauvegardé
    const themeSauvegarde = localStorage.getItem("theme");
    if (themeSauvegarde === "dark") {
        body.classList.add("dark-mode");

        if (toggleBtn) {
            toggleBtn.textContent = "☀️";
        }
    }

    // changer de thème
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () =>{
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggleBtn.textContent = "☀️";
            } else {
                localStorage.setItem("theme","light");
                toggleBtn.textContent = "🌙";
            }
        });
    }

    // NAVBAR DYNAMIQUE SCROLL
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }
    });

    // BOUTON RETOUR EN HAUT
    const btnTop = document.getElementById("btn-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display ="none";
        }
    });
    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })

});

