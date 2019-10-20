const express = require('express')
const path = require('path')

const app = express()
const port = process.env.port || 3030

/**
 * Serve up the static files
 * from the dist folder
 */
app.use(express.static(__dirname + '/dist/grolfer'))

app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname + '/dist/grolfer/index.html'))
})

app.listen(port,() => console.log('Server started on port ' + port))
