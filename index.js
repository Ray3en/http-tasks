const express = require('express')
const PORT = 4000
const app = express()

const httpRouter = require('./routers/httpRouter')
const headersRouter = require('./routers/headersRouter')
const regauthRouter = require('./routers/reagauthRouter')
const apiRouter = require('./routers/apiRouter')
const exampleRouter = require('./routers/exampleRouter')

app.use(express.json());
app.use('/http', httpRouter)
app.use('/headers', headersRouter)
app.use('/regauth', regauthRouter)
app.use('/api', apiRouter)
app.use('/example', exampleRouter)

async function startApp(){
    try {
        app.listen(PORT, () => {
            console.log(`Server start http://localhost:${PORT}`)
        })
    } catch(e){
        console.log(e)
    }
}

startApp()
