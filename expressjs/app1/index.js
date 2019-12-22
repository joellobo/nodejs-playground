const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('*', function(req, res){
    res.set('Content-Type', 'text/json')
    const msg = {
        message: 'what'
    }
    res.status(404).send(msg)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))