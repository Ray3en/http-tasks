const express = require('express')
const cors = require('cors')
const PORT = 4000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/http', require('./routers/httpRouter'))
app.use('/headers', require('./routers/headersRouter'))
app.use('/regauth', require('./routers/reagauthRouter'))
app.use('/api', require('./routers/apiRouter'))
app.use('/example', cors(), require('./routers/exampleRouter'))
app.use('/practice', cors(), require('./routers/practiceRouter'))

try {
    app.listen(PORT, () => {
        console.log(`Server start http://localhost:${PORT}`)
    })
} catch(e) {
    console.log(e)
}
