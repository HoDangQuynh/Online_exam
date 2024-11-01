const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Cấu hình cơ sở dữ liệu
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username', // Thay bằng tên người dùng MySQL của bạn
    password: 'your_password', // Thay bằng mật khẩu MySQL của bạn
    database: 'thi_online'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API đăng nhập
app.post('/code giao dien moi/html/s2giaodiendangnhap.html', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (results.length > 0) {
            // Đăng nhập thành công
            res.json({ success: true, role: results[0].role });
        } else {
            // Đăng nhập thất bại
            res.status(401).json({ success: false });
        }
    });
});

// Khởi động máy chủ
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});