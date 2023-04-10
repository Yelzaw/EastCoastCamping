
const { User, CampGround, Review } = require('../models');

const resolvers = {

  // QUERIES
  Query: 
  {

    // ---------- USER QUERIES ----------
    // get user by id
    userById: async (parent, args) => {
      const user = await User.findById(args.id);
      if (!user) {
        throw new Error(`user with id: ${args.id} not found!`);
      } else {
        return user;
      }
    },
    // get all users
    allUsers: async (parent, args) => {
      return await User.find();
    },

    // ---------- CAMPGROUND QUERIES ----------
    // get camp by id
    campById: async (parent, args) => {
      const camp = await CampGround.findById(args.id);
      if (!camp) {
        throw new Error(`camp with id: ${args.id} not found!`);
      } else {
        return camp;
      }
    },
    // get all camps
    allCamps: async (parent, args) => {
      return await CampGround.find();
    },
    
  },

  // MUTATIONS
  Mutation: {

    // ---------- USER MUTATIONS ----------
    // create new user
    createUser: async (parent, args) => {
      const { name, email, password } = args;
      
      const newUser = new User(args);
      return await newUser.save();
    },
    // delete user by id
    deleteUser: async (parent, args) => {
      const deletedUser = await User.findByIdAndDelete(args.id);
      if (!deletedUser) {
        throw new Error(`user with id: ${args.id} not found!`);
      } else {
        return deletedUser;
      }
    },
    
  }
}

module.exports = resolvers;