document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const contactInput = document.getElementById("contact");
    const passwordInput = document.getElementById("matkhau");
    const confirmPasswordInput = document.getElementById("nhaplaimatkhau");
    const roleInputs = document.querySelectorAll("input[name='role']");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const contact = contactInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const role = Array.from(roleInputs).find(input => input.checked)?.id;

        errorMessage.style.display = "none";
        errorMessage.textContent = "";

        // Kiểm tra thông tin đầu vào
        if (!contact || !password || !confirmPassword || !role) {
            errorMessage.textContent = "Vui lòng điền đầy đủ thông tin!";
            errorMessage.style.display = "block";
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = "Mật khẩu nhập lại không khớp!";
            errorMessage.style.display = "block";
            return;
        }

        // Lưu thông tin tài khoản vào localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.contact === contact);

        if (userExists) {
            errorMessage.textContent = "Tài khoản đã tồn tại!";
            errorMessage.style.display = "block";
            return;
        }

        users.push({ contact, password, role });
        localStorage.setItem("users", JSON.stringify(users));

        window.location.href = "s2giaodiendangnhap.html";
    });
});
