import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        password: String!
        email: String
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie!]
    }

    type Movie {
        id: ID!
        name: String!
        releaseYear: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: [User!]
        user(id: ID!): User!
        movies: [Movie!]
        movie(name: String!): Movie!
    }

    input createUserInput {
        name: String!
        password: String!
        age: Int!
        nationality: Nationality = ARGENTINA
    }

    input updateUsernameInput {
        name: String!
        userId: String!
    }

    input deleteUserInput {
        userId: String!
    }

    type Mutation {
        createUser(input: createUserInput!): User!
        updateUsername(input: updateUsernameInput!): User!
        deleteUser(input: deleteUserInput!): User
    }

    enum Nationality {
        CANADA
        BRAZIL
        CHILE
        ARGENTINA
        COLOMBIA
        SPAIN
    }
`
