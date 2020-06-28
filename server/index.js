const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.send("HELLO from SERVER")
})

app.listen(PORT, () => {
  console.log("OK ===> ", PORT, process.pid)
})
