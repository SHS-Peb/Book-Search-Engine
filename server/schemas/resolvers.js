const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: (parent, args, context) => {
      if (context.user) {
        // You can fetch user data from your database or context
        // For simplicity, returning a mock user
        return context.user;
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      // Perform authentication logic and return an Auth object with a token
      // For simplicity, a mock token is returned
      return { token: 'mock-token', user: { _id: '1', email } };
    },
    addUser: async (parent, { username, email, password }) => {
      // Perform user creation logic, generate a token, and return an Auth object
      // For simplicity, a mock token is returned
      return { token: 'mock-token', user: { _id: '2', username, email } };
    },
    saveBook: (parent, { bookData }, context) => {
      if (context.user) {
        // Perform book-saving logic, e.g., add to the user's savedBooks
        // Return the updated user
        return updatedUser;
      }
      throw new AuthenticationError('Not logged in');
    },
    removeBook: (parent, { bookId }, context) => {
      if (context.user) {
        // Perform book removal logic, e.g., remove from the user's savedBooks
        // Return the updated user
        return updatedUser;
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;

