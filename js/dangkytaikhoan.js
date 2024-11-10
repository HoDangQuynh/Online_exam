document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn không cho form tải lại trang

        // Lấy giá trị của các trường
        const contact = document.getElementById("contact").value;
        const matkhau = document.getElementById("matkhau").value;
        const nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;
        const teacherRadio = document.getElementById("teacher");
        const studentRadio = document.getElementById("student");

        // Kiểm tra các điều kiện
        if (!contact) {
            errorMessage.textContent = "Vui lòng nhập số điện thoại hoặc email.";
            errorMessage.style.display = "block";
        } else if (!matkhau) {
            errorMessage.textContent = "Vui lòng nhập mật khẩu.";
            errorMessage.style.display = "block";
        } else if (matkhau !== nhaplaimatkhau) {
            errorMessage.textContent = "Mật khẩu nhập lại không khớp.";
            errorMessage.style.display = "block";
        } else if (!teacherRadio.checked && !studentRadio.checked) {
            errorMessage.textContent = "Vui lòng chọn vai trò (giáo viên hoặc học sinh).";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none"; // Ẩn thông báo lỗi nếu đăng ký thành công
            alert("Đăng ký thành công!");

            // Chuyển hướng tới trang đăng nhập
            window.location.href = "s2giaodienDangNhap.html"; // Đường dẫn tới form đăng nhập
        }
    });
});
