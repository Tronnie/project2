// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize


if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    var sequelize = new Sequelize("sequelize_work", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
};

// Exports the connection for other files to use
module.exports = sequelize;

























//original project 2
// // Set up MySQL connection.
// var mysql = require("mysql");
//
// // var connect = require('./connect.js')
//
// // var connection = mysql.createConnection(connect.input);
//
// if(process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
//     connection = mysql.createConnection({
//         port: 3306,
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'project2_db',
//     });
// };
//
//
// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
//
// // Export connection for our ORM to use.
// module.exports = connection;
