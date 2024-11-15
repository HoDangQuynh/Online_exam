document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Ngăn không cho form tải lại trang khi submit

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Xóa thông báo lỗi trước khi kiểm tra
        errorMessage.style.display = "none";
        errorMessage.textContent = "";

        // Kiểm tra tính hợp lệ của email
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage.textContent = "Email không hợp lệ! Vui lòng nhập lại.";
            errorMessage.style.display = "block";
            return;
        }

        // Kiểm tra độ dài mật khẩu
        if (password.length < 6) {
            errorMessage.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
            errorMessage.style.display = "block";
            return;
        }

        // Kiểm tra thông tin đăng nhập (giả lập dữ liệu)
        const validEmail = "user@example.com";
        const validPassword = "password123";

        if (email === validEmail && password === validPassword) {
            errorMessage.style.display = "none";
            window.location.href = "s3giaodientrangchusinhvien.html"; 
        } else {
            errorMessage.textContent = "Email hoặc mật khẩu không đúng!";
            errorMessage.style.display = "block";
        }
    });
});
