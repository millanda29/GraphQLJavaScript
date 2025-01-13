const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: ID
    title: String
    director: String
    year: Int
  }

  type Query {
    getAllMovies: [Movie]
    getMovie(id: ID!): Movie
  }

  type Mutation {
    addMovie(title: String!, director: String!, year: Int!): Movie
    updateMovie(id: ID!, title: String!, director: String!, year: Int!): Movie
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = typeDefs;
