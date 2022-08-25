const cookieParser = require("cookie-parser");
var express = require(`express`)
var logger = require(`morgan`)

var app = express();

app.use(logger('dev'))

app.use(cookieParser())


app.use("/about", (req, res, next) => {
    res.cookie("username", "joel")
    next()
})

// app.use((req, res, next) => {
//     res.cookie("username", "joel")
//     next()
// })

app.use((req, res, next) => {
    let username = req.cookies.username
    res.send(username)
    next()
})

app.listen(4000, () => {
    console.log(`server listening on port 4K`)
})