document.addEventListener("DOMContentLoaded", () => {
    const addStudentBtn = document.querySelector(".add-student-btn");
    const tableBody = document.querySelector(".table-body");
    let studentData = []; // Dữ liệu sinh viên hiện tại

    // Render lại bảng sau khi thêm sinh viên
    const renderTable = () => {
        tableBody.innerHTML = "";

        if (studentData.length === 0) {
            tableBody.innerHTML = `<p>Không tìm thấy dữ liệu!</p>`;
            return;
        }

        studentData.forEach((student, index) => {
            const row = document.createElement("div");
            row.classList.add("table-row");
            row.innerHTML = `
                <span>${index + 1}. ${student.name}</span>
                <span>${student.email}</span>
                <span><button class="remove-btn">Xóa</button></span>
            `;
            // Xử lý sự kiện xóa sinh viên
            row.querySelector(".remove-btn").addEventListener("click", () => {
                studentData.splice(index, 1);
                renderTable();
            });
            tableBody.appendChild(row);
        });
    };

    // Xử lý sự kiện thêm sinh viên
    addStudentBtn.addEventListener("click", () => {
        const name = prompt("Nhập tên tài khoản của sinh viên:");
        const email = prompt("Nhập email của sinh viên:");

        // Kiểm tra tính hợp lệ của dữ liệu
        if (!name || !email) {
            alert("Tên và email không được để trống!");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Email không hợp lệ!");
            return;
        }

        // Thêm sinh viên mới vào danh sách
        studentData.push({ name, email });
        alert("Đã thêm thành viên mới thành công!");
        renderTable();
    });

    // Khởi tạo danh sách trống
    renderTable();
});
