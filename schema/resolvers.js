const { userList, movieList } = require('../fakeData')

const resolvers = {
    Query: {
        // User Resolvers
        users: () => userList,
        user: (parent, args) => {
            return userList.find(user => user.id === args.id)
        },
        // Movie Resolvers
        movies: () => movieList,
        movie: (parent, args) => {
            return movieList.find(movie => movie.name === args.name)
        },
    },

    User: {
        favoriteMovies: () => movieList.filter(movie => movie.isInTheaters === false)
    },

    Mutation: {
        createUser: (prent, args) => {
            const user = args.input
            const lastId = userList[userList.length - 1].id
            user.id = lastId + 1
            userList.push(user)
            return user
        },
        updateUsername: (prent, args) => {
            const { name, userId } = args.input
            const user = userList.find(user => user.id === userId)
            user.name = name
            return user
        },
        deleteUser: (prent, args) => {
            const { userId } = args.input
            const index = userList.findIndex(user => user.id === userId)
            const removedUser = userList.splice(index, 1)
            return null
        }
    }
}

module.exports = { resolvers }