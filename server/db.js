const mysql = require("mysql")

// // MySQL 연결
const connection = mysql.createConnection({
  host: process.env.REACT_APP_MYSQL_SERVER_HOST,
  database: process.env.REACT_APP_MYSQL_DATABASE,
  user: process.env.REACT_APP_MYSQL_USER_NAME,
  password: process.env.REACT_APP_MYSQL_PASSWORD,
  port: process.env.REACT_APP_MYSQL_PORT,
})

// MySQL 연결 테스트
connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err)
  } else {
    console.log("Connected to MySQL database", connection.config.host)
  }
})

// test
// /db/customer/insert
function addCustomer() {
  return "INSERT INTO CUSTOMER (userId, password, userName, email, phone, agreeMarketing) VALUES(?, ?, ?, ?, ?, ? );"
}

module.exports = connection
