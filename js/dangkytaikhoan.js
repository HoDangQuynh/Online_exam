document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector('form');
    const contactInput = document.getElementById('contact');
    const passwordInput = document.getElementById('matkhau');
    const confirmPasswordInput = document.getElementById('nhaplaimatkhau');
    const roleInputs = document.getElementsByName('role');

    signupForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const contact = contactInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        let role = "";

        // Kiểm tra mật khẩu và nhập lại mật khẩu khớp nhau
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp. Vui lòng nhập lại.");
            return;
        }

        // Lấy role (giáo viên hoặc học sinh)
        for (const roleInput of roleInputs) {
            if (roleInput.checked) {
                role = roleInput.id;
                break;
            }
        }

        if (!role) {
            alert("Vui lòng chọn vai trò.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ contact, password, role })
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                // Có thể điều hướng đến trang đăng nhập
                window.location.href = "/login.html";
            } else {
                alert(result.message);
            }
        } catch (error) {
            alert("Đã xảy ra lỗi kết nối tới server.");
            console.error(error);
        }
    });
});
