document.addEventListener("DOMContentLoaded", () => {
    const addStudentBtn = document.querySelector(".add-student-btn");
    const modal = document.getElementById("addStudentModal");
    const closeModal = document.getElementById("closeModal");
    const addStudentForm = document.getElementById("addStudentForm");
    const studentEmailInput = document.getElementById("studentEmail");
    const tableBody = document.querySelector(".table-body");

    // Hiển thị modal
    addStudentBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Đóng modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Lưu học sinh vào localStorage và cập nhật bảng
    addStudentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = studentEmailInput.value.trim();
        if (!email) return;

        const students = JSON.parse(localStorage.getItem("students")) || [];

        // Kiểm tra tài khoản đã đăng ký chưa (trùng email)
        const existingStudent = students.find(student => student.email === email);
        if (existingStudent) {
            // Nếu email tồn tại, thông báo và không thêm
            alert("Tài khoản với email này đã được đăng ký!");
            return;
        }

        // Kiểm tra xem tài khoản có tồn tại trong hệ thống không
        const registeredStudents = JSON.parse(localStorage.getItem("registeredStudents")) || [];
        const studentExists = registeredStudents.some(student => student.email === email);
        if (studentExists) {
            alert("Tài khoản này không tồn tại!");
            return;
        }

        // Thêm học sinh mới vào danh sách
        students.push({
            email,
            examsReviewed: 0,
            reviewCount: 0,
            avgScore: 0
        });

        localStorage.setItem("students", JSON.stringify(students));
        studentEmailInput.value = ""; // Xóa input
        modal.style.display = "none"; // Ẩn modal

        updateStudentTable(); // Cập nhật bảng
    });

    // Cập nhật bảng hiển thị học sinh
    function updateStudentTable() {
        const students = JSON.parse(localStorage.getItem("students")) || [];

        if (students.length === 0) {
            tableBody.innerHTML = `<p>Không tìm thấy dữ liệu!</p>`;
            return;
        }

        tableBody.innerHTML = ""; // Xóa nội dung cũ
        students.forEach((student, index) => {
            const row = document.createElement("div");
            row.classList.add("table-row");
            row.innerHTML = `
                <span>${index + 1}</span>
                <span>${student.email}</span>
                <span>${student.examsReviewed}</span>
                <span>${student.reviewCount}</span>
                <span>${student.avgScore}</span>
                <span><button class="delete-btn" data-index="${index}">Xóa</button></span>
            `;
            tableBody.appendChild(row);
        });

        // Thêm sự kiện xóa học sinh
        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                students.splice(index, 1);
                localStorage.setItem("students", JSON.stringify(students));
                updateStudentTable();
            });
        });
    }

    // Gọi khi tải trang
    updateStudentTable();
});
