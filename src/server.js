// src/server.js
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const path = require('path');
const cors = require('cors'); // Agregar CORS
const typeDefs = require('./graphql/movieSchema');
const resolvers = require('./graphql/movieResolvers');

// Crear servidor Express
const app = express();

// Configurar CORS para permitir solicitudes del navegador
app.use(cors());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Crear servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Iniciar Apollo Server con Express
async function startServer() {
  await server.start();  // Asegúrate de que Apollo esté listo antes de aplicarlo

  // Apollo middleware
  server.applyMiddleware({ app, path: '/graphql' });

  // Express también sirve index.html por defecto
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  // Iniciar el servidor Express en el puerto 4000
  app.listen({ port: 4000 }, () =>
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
