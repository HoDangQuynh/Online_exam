document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const errorMessage = document.querySelector(".error-message");

    // Tài khoản mẫu
    const sampleAccount = {
        email: "test@example.com",
        password: "123456"
    };

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn không cho trang load lại

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === sampleAccount.email && password === sampleAccount.password) {
            errorMessage.style.display = "none";
            window.location.href = "/code giao dien moi/html/s3giaodientrangchusinhvien.html";
        } else {
            errorMessage.textContent = "Login failed! Incorrect email or password.";
            errorMessage.style.display = "block"; 
        }
    });
});
