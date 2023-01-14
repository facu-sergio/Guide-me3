const mysql = require('mysql2');

const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

// create the connection to database
const connectionSync = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

const connectionAsync = connectionSync.promise();

module.exports = connectionAsync;