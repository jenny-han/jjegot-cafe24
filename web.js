const express = require('express')
const path = require('path');

const app = express()
const PORT = 8001

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})