document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const contactInput = document.getElementById("contact");
    const passwordInput = document.getElementById("matkhau");
    const confirmPasswordInput = document.getElementById("nhaplaimatkhau");
    const teacherRadio = document.getElementById("teacher");
    const studentRadio = document.getElementById("student");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const contact = contactInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        let role = null;

        errorMessage.style.display = "none";
        errorMessage.textContent = "";

        // Kiểm tra hợp lệ của thông tin liên hệ
        const isEmail = /^\S+@\S+\.\S+$/.test(contact); // Email hợp lệ
        const isPhone = /^[0-9]{10,12}$/.test(contact); // Số điện thoại hợp lệ
        if (!isEmail && !isPhone) {
            errorMessage.textContent = "Vui lòng nhập số điện thoại hoặc email hợp lệ!";
            errorMessage.style.display = "block";
            return;
        }

        // Kiểm tra độ dài mật khẩu
        if (password.length < 6) {
            errorMessage.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
            errorMessage.style.display = "block";
            return;
        }

        // Kiểm tra mật khẩu khớp
        if (password !== confirmPassword) {
            errorMessage.textContent = "Mật khẩu nhập lại không khớp!";
            errorMessage.style.display = "block";
            return;
        }

        // Kiểm tra xem người dùng có chọn vai trò hay không
        if (teacherRadio.checked) {
            role = "Giáo viên";
        } else if (studentRadio.checked) {
            role = "Học sinh";
        } else {
            errorMessage.textContent = "Vui lòng chọn vai trò của bạn!";
            errorMessage.style.display = "block";
            return;
        }
        window.location.href = "s2giaodiendangnhap.html";
    });
});
