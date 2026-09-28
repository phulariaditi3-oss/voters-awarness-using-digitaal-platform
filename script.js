// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Contact / Feedback form
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

        await fetch(
            "https://script.google.com/macros/s/AKfycbzioiyO4LV1abfNQLItY-oV5h4URCGURdqN7hzkns7h_BGCnf9GK7rCG2_vDGvGVNAeSg/exec",
            {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            }
        );


        formMessage.textContent =
            "Thank you! Your feedback has been submitted.";

        contactForm.reset();


    } catch (error) {

        console.error(error);

        formMessage.textContent =
            "Unable to submit feedback.";

    }

});