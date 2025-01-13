const Movie = require('../model/movieModel');

// Base de datos simulada
let movies = [
  { id: 1, title: 'The Lord of the Rings', director: 'Peter Jackson', year: 2001 },
  { id: 2, title: 'The Matrix', director: 'Lana Wachowski', year: 1999 },
];

const resolvers = {
  Query: {
    getAllMovies: () => movies,
    getMovie: (_, { id }) => movies.find(movie => movie.id === id),
  },
  Mutation: {
    addMovie: (_, { title, director, year }) => {
      const newMovie = { id: Math.random().toString(36).substr(2, 9), title, director, year };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (_, { id, title, director, year }) => {
      const movie = movies.find(movie => movie.id === id);
      if (!movie) return null;
      movie.title = title;
      movie.director = director;
      movie.year = year;
      return movie;
    },
    deleteMovie: (_, { id }) => {
      const movieIndex = movies.findIndex(movie => movie.id === id);
      if (movieIndex === -1) return null;
      const [deletedMovie] = movies.splice(movieIndex, 1);
      return deletedMovie;
    },
  },
};

module.exports = resolvers;
