const express = require('express');
    morgan = require('morgan');

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

app.get('/movies', (req,res) => {
    res.json(topMovies)
});

app.get('/', (req, res) => {
    res.send('Welcome to my movie app!');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});