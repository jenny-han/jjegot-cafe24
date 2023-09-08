const express = require('express')
const path = require('path');

const app = express()
const PORT = 8001

app.use(express.static(path.join(__dirname, 'client/build')));

const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }))

app.use(cors());


app.get('/', (req, res) => {
  res.sendFile('index.html')
  // res.sendFile(path.join(__dirname,'/client/build/index.html'))
})
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/src/index'))
// })

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})