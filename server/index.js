const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000;

// MiddleWare
app.use(cors())

app.get('/', (req, res) => {
    res.send('server is runing ')
})


app.listen(port, () => {
    console.log(`Server is runing on this port ${port}`)
}) 