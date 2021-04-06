const mysql = require ('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'explorateur',
  password: 'Ereul9Aeng',
  database: 'BlogPosts'
});

module.exports = db;