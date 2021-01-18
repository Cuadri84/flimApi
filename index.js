const express = require('express')
const request = require('request');
const app = express() //create server lo hace aquí
const news = require('./modules/news');
const bodyParser = require('body-parser');
const port = 3000



//middleware
app.use(express.static('public'));//carpeta de archivos estaticos
//para trabajar con pug
app.set('view engine', 'pug');//para trabajar con pug
app.set('views','./views');//donde lo guarda
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//RUTAS
app.get('/', news.getHome)
app.get('/film/:title',news.getFilm)
app.post('/film',news.postFilm)



app.listen(port, () => {
  console.log(`El servidor es http://localhost:${port}`)
})
