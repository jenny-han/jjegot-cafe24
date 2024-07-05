const express = require("express")
const path = require("path")
const cors = require("cors")
const bodyParser = require("body-parser")
const db = require("./db")

const app = express()
const PORT = 8001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
  cors({
    origin: "*", // 출처 허용 옵션
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
)

app.use(express.static(path.join(__dirname, "/client/build")))

app.get("/", (req, res) => {
  // res.sendFile('index.html')
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`)
})
