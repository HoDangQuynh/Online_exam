document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-login').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'index.html';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const passwordError = document.getElementById("password-error");

        const registeredEmail = "user@example.com";
        const registeredPassword = "password123";

        let isValid = true;
        passwordError.textContent = "";
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }
        if (passwordInput.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters long.";
            passwordError.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            if (emailInput.value === registeredEmail && passwordInput.value === registeredPassword) {
                window.location.href = "hoctap.html";
            } else {
                passwordError.textContent = "Invalid email or password.";
                passwordError.style.display = "block";
            }
        }
        function validateEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
    });
});
