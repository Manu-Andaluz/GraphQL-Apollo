const { ApolloServer, gql } = require('apollo-server')
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log('Running in port ', url)
})