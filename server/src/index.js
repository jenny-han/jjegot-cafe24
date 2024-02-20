const express = require("express")
const app = new express()

app.use((ctx) => {
  ctx.body = "hello world"
})

app.listen(4000, () => {
  console.log("listening port 4000")
})
