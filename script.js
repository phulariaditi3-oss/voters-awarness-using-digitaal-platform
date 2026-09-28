// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Google Apps Script URL
const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyqnc4xMLwgoJIk-Rj5DUR6IOiE27r0EntL9vbTOKhFuIrgJch4_w6YC5yGU0A6-x20WQ/exec";


// Feedback form
const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("formMessage");


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill all fields.";

        return;
    }


    formMessage.textContent =
        "Submitting feedback...";


    try {

        await fetch(SCRIPT_URL, {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })

        });


        formMessage.textContent =
            "Thank you! Your feedback has been submitted.";

        contactForm.reset();


    } catch (error) {

        console.error(error);

        formMessage.textContent =
            "Unable to submit feedback.";

    }

});