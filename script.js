// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Contact form

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("formMessage");


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill all fields.";

        return;
    }


    formMessage.textContent =
        "Thank you! Your feedback has been submitted.";

    contactForm.reset();

});