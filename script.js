


const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



const navItems = document.querySelectorAll(
    ".nav-links a"
);


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});




const contactForm =
    document.querySelector(".contact-form");

const formNote = document.getElementById("formNote");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formNote.textContent = "Please fill in all the fields.";
            formNote.style.color = "#e0a37a";
            formNote.classList.add("show");
            return;
        }


        formNote.textContent =
            "Thank you, " + name + "! Your message has been received.";
        formNote.style.color = "#B7C9A8";
        formNote.classList.add("show");


        contactForm.reset();

    }
);


document.getElementById("year").textContent =
    new Date().getFullYear();


/* ============ Card auto-animations ============ */

const animatedCards = document.querySelectorAll(
    ".mentor, .final-thanks, .skill-card, .project-card, .contact-form"
);

const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// Stagger cards within their own group so they cascade in
const cardGroups = document.querySelectorAll(
    ".skills-container, .projects-container, .gratitude"
);

cardGroups.forEach(function (group) {

    let index = 0;

    Array.from(group.children).forEach(function (child) {

        if (
            child.classList.contains("skill-card") ||
            child.classList.contains("project-card") ||
            child.classList.contains("mentor") ||
            child.classList.contains("final-thanks")
        ) {
            child.style.transitionDelay = (index * 100) + "ms";
            index++;
        }

    });

});

if (prefersReduced || !("IntersectionObserver" in window)) {

    animatedCards.forEach(function (card) {
        card.classList.add("in-view");
    });

} else {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }

            });

        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    animatedCards.forEach(function (card) {
        observer.observe(card);
    });

}