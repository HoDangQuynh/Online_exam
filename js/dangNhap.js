document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        errorMessage.style.display = "none";
        errorMessage.textContent = "";

        // Kiểm tra tính hợp lệ của email
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage.textContent = "Email không hợp lệ! Vui lòng nhập lại.";
            errorMessage.style.display = "block";
            return;
        }

        // Kiểm tra mật khẩu
        if (password.length < 6) {
            errorMessage.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
            errorMessage.style.display = "block";
            return;
        }

        // Lấy danh sách người dùng từ localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.contact === email && user.password === password);

        if (user) {
            window.location.href = "s3giaodientrangchusinhvien.html"; // Chuyển hướng sau khi đăng nhập
        } else {
            errorMessage.textContent = "Email hoặc mật khẩu không đúng!";
            errorMessage.style.display = "block";
        }
    });
});
