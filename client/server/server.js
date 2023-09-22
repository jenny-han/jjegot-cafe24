// express 모듈 호출
const express = require('express');
const cors = require('cors');
const mysql   = require("mysql");  
const app = express();

const api = require('../src/services/api')
// app.use('/api', api)


const PORT = process.env.PORT || 4000;
 console.log(process.env.REACT_APP_MYSQL_SERVER_HOST)
// MySQL 연결
const db = mysql.createPool({
    host: "jjegotseller.cafe24app.com", // 호스트
    user: "jjegot",      // 데이터베이스 계정
    password: "jajae2got@",      // 데이터베이스 비밀번호
    database: "jjegot",  // 사용할 데이터베이스
});



app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


app.get("/db/customer", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const sqlQuery = "SELECT * FROM CUSTOMER";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

app.post("/db/customer/insert", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("/db/cusomer/insert - body",req.body)
    const userId = req.body.userId;
    const password = req.body.password;
    const userName = req.body.userName;
    const email = req.body.email;
    const phone = req.body.phone;
    const agreeMarketing = req.body.agreeMarketing;
    
    const sqlQuery = "INSERT INTO CUSTOMER (userId, password, userName, email, phone, agreeMarketing) VALUES(?, ?, ?, ?, ?, ? );";  
    
    db.query(sqlQuery, [userId,password,userName,email,phone,agreeMarketing], (err, result) => {
        console.log("query",sqlQuery)
        res.send(result);
    });
});