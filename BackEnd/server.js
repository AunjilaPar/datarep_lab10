//Express generator
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors'); //install cors
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//Use cors 
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});//End of cors

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

//Open a connection ti the database
const myConnectionString = 'mongodb+srv://aunjila:Granular76@cluster0.xfarq.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//Schema to store type of data
const Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  year: String,
  poster: String
});//End of Schema 

//use above schema to create a model
var MovieModel = mongoose.model("movie", movieSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Get Request to return the following data 
app.get('/api/movies', (req, res) => {
  //const movies = [
  //   {
  //     "Title": "Avengers: Infinity War",
  //     "Year": "2018",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  //   },
  //   {
  //     "Title": "Captain America: Civil War",
  //     "Year": "2016",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
  //   }
  // ];

})
//End of api movies

//Method Listen for get request
app.get('/api/movies/:id', (req, res, next) => {
  console.log(req.params.id);
  MovieModel.findById(req.params.id,
    function (err, data) {
      res.json(data);
    });
})

//Update Movie
app.put('/api/movies/:id', (req, res) => {
  console.log("Update Movies: " + req.params.is);
  console.log(req.body);

  MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (err, data) => {
      res.send(data);
      f
    });
})//End of update

//Delete movies 
app.delete('/api/movies/:id', function (req, res) {
  console.log(req.params.id);

  MovieModel.findByIdAndDelete({ _id: req.params.id },
    function (err, data) {
      if (err)
        res.send(err);
      res.send(data);
    })
})//End of delete


//Express Server
app.post('/api/movies', (req, res) => {
  console.log('Movie Recieved');
  console.log(req.body)
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.poster);

  //Recieve data from application 
  MovieModel.create({
    title: req.body.title,
    year: req.body.year,
    poster: req.body.poster
  });//End of movieModel

  res.send('Item added');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})