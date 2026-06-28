// COMMIT 6
// JS : Dark Mode + localStorage
// Navbar dynamique au scroll
// Bouton Retour en haut
document.addEventListener("DOMContentLoaded", () => {

    // DARK MODE + LOCALSTORAGE
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

// COMMIT 7
// COMPTEUR ANIMES

const compteurs = document.querySelectorAll(".compteur");
const observerCompteurs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const compteur = entry.target;
            const cible = Number(compteur.dataset.target);

            let valeur = 0;

            const increment = cible / 100;
            const animation = setInterval(()=> {
                valeur+= increment;
                if(valeur >= cible) {

                    compteur.textContent = cible;
                    clearInterval(animation);
                } else{
                    compteur.textContent = Math.floor(valeur);
                }
            }, 20);
            observerCompteurs.unobserve(compteur);
        }
    });
}, { threshold: 0.5});
compteurs.forEach(compteur => {
    observerCompteurs.observe(compteur);
});

// FADE IN DES SECTIONS

const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.classList.add("fade-in");
});
const observeSections = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {threshold:0});
sections.forEach(section => {
    observeSections.observe(section);
});


// COMMIT 8
// Filtrage des freelances
// Validation du formulaire
document.addEventListener("DOMContentLoaded", () =>{

    // FILTRAGE DES FREELANCES

    const filtres = document.querySelectorAll(".filtre");
    const cartes = document.querySelectorAll("#profils .card");

    filtres.forEach(filtre => {
        filtre.addEventListener("click", () => {
            const categorie = filtre.dataset.categorie;
            cartes.forEach(carte => {

                if (
                    categorie === "tous" ||
                    carte.dataset.categorie === categorie
                ) {
                    carte.parentElement.style.display = "block";
                } else {
                    carte.parentElement.style.display = "none";
                }
            });
        });
    });
});

// VALIDATION FORMULAIRE

const formulaire = document.getElementById("formulaireContact");
if (formulaire) {

    formulaire.addEventListener("submit", (e) => {
        e.preventDefault();
        let valide = true;

        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const email = document.getElementById("email");
        const sujet = document.getElementById("sujet");
        const message = document.getElementById("message");
        const erreurNom = document.getElementById("erreurNom");
        const erreurPrenom = document.getElementById("erreurPrenom");
        const erreurEmail = document.getElementById("erreurEmail");
        const erreurSujet = document.getElementById("erreurSujet");
        const erreurMessage = document.getElementById("erreurMessage");

        const messageSuccess =
        document.getElementById("messageSuccess");

        erreurNom.textContent = "";
        erreurPrenom.textContent = "";
        erreurEmail.textContent = "";
        erreurSujet.textContent = "";
        erreurMessage.textContent = "";
        messageSuccess.textContent = "";

        if (nom.value.trim() === "") {
            erreurNom.textContent =
            "Veuillez entrer votre nom";
            valide = false;
        }
        if (prenom.value.trim() === "") {
            erreurPrenom.textContent =
            "Veuillez entrer votre prénom";
            valide = false;
        }
        const regexEmail = 
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email.value.trim())) {
            erreurEmail.textContent =
            "Email invalide";
            valide = false;
        }
        if(sujet.value === "") {
            erreurSujet.textContent =
            "Veuillez choisir un sujet";
            valide = false;
        }
        if(message.value.trim().length < 20) {
            erreurMessage.textContent =
            "minimum 20 caractères";
            valide = false;
        }
        if (valide) {
            messageSuccess.textContent = 
            "Message envoyé avec succès !";

            formulaire.reset();
        }
    });
}