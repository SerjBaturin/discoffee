const express = require("express")
const app = express()
const PORT = 5555

app.use(express.static('../client'))

app.listen(PORT, () => {
  console.log("OK ===> ", PORT, process.pid)
})
