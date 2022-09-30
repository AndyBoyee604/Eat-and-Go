const faker = require('faker')
const db = require('../config/connection')
const { User, Post,  } = require('../models')
const resturantSeeds = require('./resturantSeeds.json')
const userSeeds = require('./userSeeds.json')
const postSeeds = require('./postSeeds.json')

db.once('open', async () => {
    await User.deleteMany({});
    await Post.deleteMany({});
    // await resturant.deleteMany({});
    // await resturant.create(resturantSeeds)
    await User.create(userSeeds)
    await Post.create(postSeeds)

    console.log('DB SEEDED SUCCESSFULLY :)');
    process.exit(0);
})