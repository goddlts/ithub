const mysql = require('mysql');
const config = require('../config');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : config.database.host,
  user            : config.database.user,
  password        : config.database.password,
  database        : config.database.database
});
module.exports = pool;

