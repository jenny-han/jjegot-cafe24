const express = require("express")
const path = require("path")

const app = express()
const PORT = 8001

const cors = require("cors")
app.use(cors())

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "/client/build")))

app.get("/", (req, res) => {
  // res.sendFile('index.html')
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
})

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`)
})
