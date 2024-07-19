// Ensures javascript downloads after the HTML has loaded
document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.getElementById('registrationForm');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        // prevents the form from submitting to the server
        event.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        // validation logic
        // initialize validation variables
        let isValid = true;    //tracks the overall validation status
        let messages = [];      //stores validation error messages

        if (usernameInput.length < 3) {
            isValid = false;
            messages.push('username must be more than 3 characters');
        }

        if (!emailInput.includes(`@`) || !emailInput.includes(`.`)) {
            isValid = false;
            messages.push('email must contain @ and . characters');
        }

        if (passwordInput.length < 8) {
            isValid = false;
            messages.push('password must be atleast 8 characters long');
        }

        // Displaying feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful';
            feedbackDiv.style.color = '#28a745';
        }

        if(!isValid) {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});