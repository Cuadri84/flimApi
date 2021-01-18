const fetch = require('node-fetch');
const apiKey = 'acfb1cba'


//home
exports.getHome = (req,res) =>{
    res.render('home')
}

//get donde hace el fetch de la api
exports.getFilm = (req,res) =>{
    let peli =req.params.title;
    let url =`http://www.omdbapi.com/?t=${peli}&apikey=${apiKey}`
    fetch(url)
    .then(data => data.json())
    .then(pelis => {
        
        console.log(pelis)
        res.render('film',{
            titulo: pelis.Title,
            año: pelis.Year,
            director: pelis.Director,
            actores: pelis.Actors,
            poster : pelis.Poster
        }
        )
    })
    .catch(e => console.log(e))
   } 


   //post del formulario
exports.postFilm = (req,res) =>{
    let pelicula = req.body.pe_li
    res.redirect(`film/${pelicula}`)
}
    

