
const dotenv = require('dotenv').config()

const config = {
    NODE_ENV: process.env.NODE_ENV ,
    PORT: process.env.PORT ,
    MONGO_URI: process.env.MONGO_URI ,    
    saltRounds: 10,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL,
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY ,
    USER_ONE_TIME_PASS: process.env.USER_ONE_TIME_PASS ,
    MAIN_HOST: process.env.MAIN_HOST ,
    REDIS_URI: process.env.REDIS_URI ,
}

module.exports = config;