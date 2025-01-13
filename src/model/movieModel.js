// Modelo de Película
module.exports = class Movie {
    constructor(title, director, year) {
      this.id = Math.random().toString(36).substr(2, 9); // Generación simple de un ID
      this.title = title;
      this.director = director;
      this.year = year;
    }
  };
  