

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


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all the fields."
            );

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    }
);


document.getElementById("year").textContent =
    new Date().getFullYear();
