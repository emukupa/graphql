const fetch = require('node-fetch');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString)

const key = require('./api/secrets.js').API_READ_KEY;

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: '...',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: xml => xml.GoodreadsResponse
    },
  }),
});
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '....',
    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: { type: GraphQLInt},
        },
        resolve: (root, args) => fetch(`https://www.goodreads.com/author/show.xml?id=$(args.id)&key=${key}`)
          .then(response => {
            return response.text()
          })
          .then(parseXML)
          .catch(err => err)
      },
    }),
  }),
});
