const express = require('express')
const app = express()
const port = 4000
const cors = require('cors'); // enable the use of cross origin resource sharing
const bodyParser = require("body-parser"); // add a body parser
const mongoose = require('mongoose'); // adds mongoose library

// intrigrate cors into server code
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded headers
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
// connect to mongoose database
const myConnectionString = 'mongodb+srv://admin:admin111@cluster0.a6k4f.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect('myConnectionString', {useNewUrlParser: true});

// created a schema for the database
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});
//creating a model
var MovieModel = mongoose.model("movie", movieSchema);


//
/**app.get('/api/movies', (req, res)=>{
    const mymovies = [ // hard code movie data in a json
            {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title":"World War Z",
            "Year":"2013",
            "imdbID":"tt0816711",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
            ,{
            "Title":"War of the Worlds",
            "Year":"2005",
            "imdbID":"tt0407304",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
        }
    ];
    */
    MovieModel.find((err, data)=>{
        res.json(data);
    })

    // send the json code to server
    /**res.status(200).json({
        message: "Everything is good",
        movies:mymovies
    })
})*/

app.get('/api/movies/:id', (req, res)=>{
    console.log(req.params.id);

    //find 'id' in database
    MovieModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

//override: find record by id and update it
app.put('/api/movies/:id', (req, res)=>{
    console.log('Update movie: '+req.params.id);
    console.log(req.body);

    MovieModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})


// post
app.post('/api/movies',(req, res)=>{
console.log('Movie Received!');
console.log('req.body.title');
console.log('req.body.year');
console.log('req.body.poster');

MovieModel.create({
    title:req.body.title,
    year:req.body.year,
    poster:req.body.poster
    })
    res.send('Item Added');//will keep it from posting duplicated movies 
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})