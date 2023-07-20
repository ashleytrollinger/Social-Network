const connection = require('../config/connection');
const { User, Thought } = require('../models');

const userSeedData = require('./userSeedData.json');
const thoughtSeedData = require('./thoughtSeedData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.collection.insertMany(userSeedData);
    await Thought.collection.insertMany(thoughtSeedData);
    console.log("Seeded complete");
    process.exit(0);
});
