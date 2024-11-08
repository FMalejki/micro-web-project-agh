document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("buttonId");
    const contactForm = document.getElementById("contactForm");

    button.addEventListener("click", function() {
        contactForm.classList.toggle("hidden");

        if (contactForm.classList.contains("hidden")) {
            button.innerText = "Wyślij nam formularz kontaktowy!";
        } else {
            button.innerText = "Ukryj formularz kontaktowy";
        }
    });
})

document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();
    let isValid = true;

    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    const messageField = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (messageField.value.trim() === "") {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    const success = document.getElementById('success');
    if (isValid) {
        const button = document.getElementById("buttonId");
        const contactForm = document.getElementById("contactForm");
        success.style.display = "block";
        contactForm.classList.toggle("hidden");
        button.classList.toggle("hidden");
        emailField.value = "";
        messageField.value = "";
    }
});