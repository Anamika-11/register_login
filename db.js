const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anamika@11',
  database: 'user'
});

module.exports = connection;