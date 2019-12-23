const express = require('express')
const app = express()
const port = 3000
const CJSON = 'application/json'
const CXML = 'text/xml'

app.get('/', (req, res) => res.send('Hello World!'))

app.get('*', function(req, res){
    let msg = '';

    const acceptJSON = req.accepts(CJSON)
    console.log(`accept:${acceptJSON}`)

    const acceptXML = req.accepts(CXML)
    console.log(`accept:${acceptXML}`)

    if (acceptJSON === CJSON) {
        res.set('Content-Type', CJSON)
        msg = {
            message: 'what'
        }
    } 

    if (acceptXML === CXML) {
        res.set('Content-Type', CXML)
        msg = '<xml>Error 404</xml>'
    }
    res.status(404).send(msg)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))