//Express generator
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors'); //install cors
const bodyParser = require("body-parser");

//Use cors 
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});//End of cors

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Get Request to return the following data 
app.get('/api/movies', (req, res) => {
  const movies = [
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
  ];
  //Pass it to server  
  res.status(200).json({
    message: "Everything is good",
    myMovies: movies
  })
})//End of api movies

//Express Server
app.post('/api/movies', (req, res) => {
  console.log('Movie Recieved');
  console.log(req.body)
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.poster);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})