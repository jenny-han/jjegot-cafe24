// express 모듈 호출
const express = require('express');

const cors = require('cors');
const mysql = require('mysql');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const api = require('../src/services/api');
app.use('/api', api);

const PORT = process.env.PORT || 4000;

// const db = require('db')
console.log('test', `${process.env.REACT_APP_MYSQL_SERVER_HOST}`);

// MySQL 연결
const db = mysql.createPool({
  host: process.env.REACT_APP_MYSQL_SERVER_HOST,
  database: process.env.REACT_APP_MYSQL_DATABASE,
  user: process.env.REACT_APP_MYSQL_USER_NAME,
  password: process.env.REACT_APP_MYSQL_PASSWORD,
  port: 3306,
});

app.use(
  cors({
    origin: '*', // 출처 허용 옵션
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  }),
);

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true }));

// 서버 연결 시 발생
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.get('/db/customer', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const sqlQuery = 'SELECT * FROM CUSTOMER';

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/db/customer/insert', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log('/db/cusomer/insert - body', req.body);
  const userId = req.body.userId;
  const password = req.body.password;
  const userName = req.body.userName;
  const email = req.body.email;
  const phone = req.body.phone;
  const agreeMarketing = req.body.agreeMarketing;

  const sqlQuery =
    'INSERT INTO CUSTOMER (userId, password, userName, email, phone, agreeMarketing) VALUES(?, ?, ?, ?, ?, ? );';

  db.query(
    sqlQuery,
    [userId, password, userName, email, phone, agreeMarketing],
    (err, result) => {
      console.log('query', sqlQuery);
      res.send(result);
    },
  );
});

app.get('/db/customer/login', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const sqlQuery = 'SELECT password FROM CUSTOMER WHERE userId = (?);';

  db.query(sqlQuery, [], (err, result) => {
    res.send(result);
  });
});

app.get('/db/customer/checkId', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  //query 로 받아야함
  const userId = req.query.userId;
  const sqlQuery = 'SELECT * FROM CUSTOMER WHERE userId = (?);';
  db.query(sqlQuery, [userId], (err, result) => {
    res.send(result);
  });
});

//test
// app.get('/')
