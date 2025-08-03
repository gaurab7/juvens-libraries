import express from 'express'


const app = express()
app.use(express.json())

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