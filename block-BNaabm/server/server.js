var express = require(`express`)

var app = express();

app.use("/", (req, res, next) => {
    console.log(req.method, req.url)
    next();
})

app.get("/", (req, res, next) => {
    res.send(`Hello World`)
})

app.listen(4000, () => {
    console.log(`Server listening on port 4K`)
})