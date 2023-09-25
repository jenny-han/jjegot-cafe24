const mysql = require('mysql');

// MySQL 연결
const db = mysql.createPool({
    host: process.env.REACT_APP_MYSQL_SERVER_HOST, // 호스트
    user: process.env.REACT_APP_MYSQL_USER_NAME,      // 데이터베이스 계정
    password: process.env.REACT_APP_MYSQL_PASSWORD,      // 데이터베이스 비밀번호
    database: process.env.REACT_APP_MYSQL_DATABASE,  // 사용할 데이터베이스
});

module.exports = db;