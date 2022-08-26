var express = require(`express`)
var url = require(`url`)

var app = express()
let now = Date.now()

app.use((req, res, next) => {
    
    console.log(req.method, req.url, Date.now() - now)
    next()
})

app.use((req, res, next) => {
    if(req.url.split(`.`).pop === `css`){
        
    }

    next()
})

app.use((req, res, next) => {
    req.body = ``
    req.on(`data`, (chunk) => {
        
        req.body += chunk 
    })
    next()
})

app.use((req,res,next) => {
    req.on(`end`, () => {
        console.log(req.body)
    next()
    })
})

app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

app.listen(8000, () => {
    console.log(`server listening on port 8K`)
})




