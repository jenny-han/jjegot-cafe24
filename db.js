const mysql = require("mysql")

// console.log(process.env.REACT_APP_MYSQL_SERVER_HOST)
// MySQL 연결
// const connection = mysql.createConnection({
//   host: process.env.REACT_APP_MYSQL_SERVER_HOST,
//   database: process.env.REACT_APP_MYSQL_DATABASE,
//   user: process.env.REACT_APP_MYSQL_USER_NAME,
//   password: process.env.REACT_APP_MYSQL_PASSWORD,
//   port: 3306,
// })

// MySQL 연결 production
const connection = mysql.createConnection({
  host: "jjegotseller.cafe24app.com",
  database: "jjegot",
  user: "jjegot",
  password: "jajae2got@",
  port: 3306,
})

// MySQL 연결 및 연결 끊어진 경우 재 연결
function handleDisconnect() {
  connection.connect(function (err) {
    if (err) {
      console.log("MySQL connection failed:", err)
      setTimeout(handleDisconnect, 2000)
    } else {
      console.log("Connected to MySQL database")
    }
  })
  connection.on("error", function (err) {
    console.log("DB ERROR :", err)
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      return handleDisconnect()
    } else {
      throw err
    }
  })
}
handleDisconnect()

module.exports = connection
