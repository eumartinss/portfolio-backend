import express from 'express'
import routes from './src/routes/index.js'

const PORT = 8080
const app = express()
routes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 

