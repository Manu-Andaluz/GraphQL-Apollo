import { userList, movieList } from '../fakeData'

export const resolvers = {
    Query: {
        // User Resolvers
        users: () => userList,
        user: (parent: any, args: any) => {
            return userList.find(user => user.id === args.id)
        },
        // Movie Resolvers
        movies: () => movieList,
        movie: (parent: any, args: any) => {
            return movieList.find(movie => movie.name === args.name)
        },
    },

    User: {
        favoriteMovies: () => movieList.filter(movie => movie.isInTheaters === false)
    },

    Mutation: {
        createUser: (parent: any, args: any) => {
            const user = args.input
            const lastId = userList[userList.length - 1].id
            user.id = lastId + 1
            userList.push(user)
            return user
        },
        updateUsername: (parent: any, args: any) => {
            const { name, userId } = args.input
            const user = userList.find(user => user.id === userId)
            user ? user.name = name : ''
            return user
        },
        deleteUser: (parent: any, args: any) => {
            const { userId } = args.input
            const index = userList.findIndex(user => user.id === userId)
            const removedUser = userList.splice(index, 1)
            return null
        }
    }
}
