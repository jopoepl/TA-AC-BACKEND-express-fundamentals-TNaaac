var express = require(`express`)

var app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use(express.json())

app.use(express.urlencoded())

app.use(express.static(__dirname + `/public`))

app.get("/", (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

app.post("/json", (req, res) => {
    console.log(req.body)
})

app.post("/contact", (req, res) => {
    console.log(req.body)
})



app.listen(5000, () => {
    console.log(`server listneing on port 5K`)
})