const express = require("express")
const app = express()
const PORT = 7000

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/cart', (req, res) => {
    res.render('cart')
})

app.listen(PORT, (err) => {
    if (err) console.log("Server is currently down.");
    console.log(`Server is running at http://localhost:${PORT}`);
})