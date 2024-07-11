// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS
    emailjs.init("RUpS5jSuG80qg4FeX"); // Replace with your actual EmailJS User ID

    // Form submission handler
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Form validation
        if (name && email && message) {
            emailjs.sendForm('service_vneux0f', 'template_839ldgz', form)
                .then((response) => {
                    alert('Your message has been sent successfully!');
                    form.reset();
                }, (error) => {
                    alert('Sorry, there was an error sending your message.');
                });
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Toggle Button Functionality
    const toggleButton = document.querySelector('.toggle-button');
    const navList = document.querySelector('nav ul');

    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });

    // Ensure that clicking on a link in the nav menu also closes the menu
    navList.addEventListener('click', () => {
        navList.classList.remove('active');
        toggleButton.classList.remove('active');
    });
});
