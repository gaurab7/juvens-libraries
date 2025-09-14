import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

//lets server server all files in public folder
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(cors())

//PORT
const PORT = process.env.PORT || 8848

//ROUTES
//home
//app.use('/', )
//login
//app.use('/login',)
//top-charts
//app.use('top',)
//yourStuff
//app.use('your',)

app.listen(PORT, ()=>{
    console.log(`server started on PORT: ${PORT}`)
})