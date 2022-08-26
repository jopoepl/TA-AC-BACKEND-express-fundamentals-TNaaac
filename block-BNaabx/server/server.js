var express = require(`express`)
var date = new Date()
var fs = require(`fs`)

var app = express()
let now = Date.now()

//custom logger

app.use((req, res, next) => {
    console.log(req.method, req.url, date.getMilliseconds())
    next()
})

// app.use((req, res, next) => {
//     if (req.url.split(".").pop() === "css" && req.method === `GET`) {
//       const cssFile = req.url;
//       let pathName = __dirname + "/assets" + cssFile
//       console.log(pathName)
//       fs.createReadStream(pathName).pipe(res)
//     }
//     if (req.method === "GET" && req.url.split(".").pop() === "jpg") {
//       const imageUrl = req.url;
//       res.send(__dirname + "/assets" + req.url);
//     }
//     next();
//   })


app.get('/stylesheet/style.css', function(req, res) {
    console.log(__dirname + "/assets/" + "style.css")
    res.sendFile(__dirname + "/assets/stylesheet/" + "style.css");
  });

// function myStatic

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




