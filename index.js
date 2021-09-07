const bodyParser = require('body-parser');
const express = require('express');
const lodash = require('lodash');
const morgan = require('morgan'),
const uuid = require('uuid');

const app = express();

app.use(morgan('common'));

let topMovies = [
    {
      title: 'Mommy',
      director: 'Xavier Dolan',
      year: '2014'
    },
    {
    title: 'Les bien-aimés',
    director: 'Christophe Honoré',
    year: '2011'
    },
    {
    title: 'Climax',
    director: 'Gaspar Noé',
    year: '2018'
    },
    {
    title: 'Harry Potter & The Prisonner Of Azkaban',
    director: 'Alfonso Cuarón',
    year: '2004'
    },
    {
    title: 'Titanic',
    director: 'James Cameron',
    year: '1997'
    },
    {
    title: 'The Sixth Sense',
    director: 'M. Night Shyamalan',
    year: '1999'
    },
    {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    year: '2014'
    },
    {
    title: 'The Truman Show',
    director: 'Peter Weir',
    year: '1998'
    },
    {
    title: 'Dogville',
    director: 'Lars von Trier',
    year: '2003'
    },
    {
    title: 'Elephant',
    director: 'Gus Van Sant',
    year: '2003'
    }
  ];

app.use(express.static('public'));

// Gets the list of data about all movies
app.get('/movies', (req,res) => {
    res.json(movies)
});

// Gets the description of a single movie, by title
app.get('/movies/:title', (req, res) => {
    res.send(movies.find((movie) =>
        {return movie.title === req.params.title }));
});

// Gets data about a genre, by title
app.get('/movies/:title/genre', (req, res) => {
    res.send(movies.find((movie) =>
        {return movie.title === req.params.title }));
});

// Gets data about a director, by name
app.get('/directors/:name', (req, res) => {
    res.send(directors.find((director) =>
        {return director.name === req.params.name }));
});

// Gets data about a director, by name
app.get('/directors/:name', (req, res) => {
    res.send(directors.find((director) =>
        {return director.name === req.params.name }));
});

// Add data for a new user to register
app.post('/myaccount', (req, res) => {
    let newUser = req.body;

    if (!newUser.userName) {
        const message = 'Missing user name in request body.';
        res.status(400).send(message);
    } else {
        users.push(newUser);
        res.status(201).send(newUser);
    }
});

// Update user info by user name
app.put('/myaccount', (req, res) => {
    let user = users.find(user) => {
        return user.userName === req.params.userName });
    
    if (!newUserName.userName) {
        const message = 'Missing new user name in request body.';
        res.status(400).send(message);
    } else {
        const message = 'User name has been changed.'
        user.put(newUserName);
        res.status(201.sens(newUserName);
    }
    });

// Add a movie to the user's list of favorites
app.put('/movies', (req, res) => {

})

// Remove a movie from the user's list of favorites
app.delete('/mytopmovies', (req, res) => {

})

// Remove existing user
app.delete('/myaccount', (req, res) => {
    let user = users.find((user) => {
        return user.userName = req.params.userName });

    if (user) {
        users = users.filter((obj) => {
            return obj.userName !== req.params.userName });
            res.status(201).send(req.params.id + 'was deleted.');
    }
});   
  
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});