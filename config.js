// LOAD DOTENV
const dotenv = require('dotenv');
dotenv.config();

config={
    port: process.env.PORT || 3000,
    database_uri: process.env.DATABASE_URI
}

module.exports = config;