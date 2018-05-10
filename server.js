const express = require('express');
const graphQlHTTP = require('express-graphql')
// instantiate a server;
const server = express();
server.use(express.json());

const schema = require('./schema');
server.use('/graphql', graphQlHTTP({
  schema,
  graphiql: true,
}))

server.get('/', (req, res) => {
  res.json({msg: 'success'})
});

module.exports = server;
