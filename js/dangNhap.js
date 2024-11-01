require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());

// Kết nối tới MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log('Lỗi kết nối tới MySQL:', err);
    } else {
        console.log('Kết nối tới MySQL thành công');
    }
});

// API đăng nhập
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM Users WHERE email = ?';
    db.query(query, [email], (error, results) => {
        if (error) return res.status(500).json({ message: 'Lỗi máy chủ' });
        if (results.length === 0) {
            return res.status(400).json({ message: 'Email không tồn tại' });
        }

        const user = results[0];
        // So sánh mật khẩu nhập vào với mật khẩu lưu trữ
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Lỗi máy chủ' });
            if (!isMatch) return res.status(400).json({ message: 'Sai mật khẩu' });

            res.status(200).json({ message: 'Đăng nhập thành công' });
        });
    });
});

// Khởi chạy server
app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
