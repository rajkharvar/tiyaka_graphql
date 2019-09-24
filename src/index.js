import express from 'express'

const app = express()

app.use('/', (req, res) => res.send('hello world'))
const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`Magic Happens at port ${port}`))
