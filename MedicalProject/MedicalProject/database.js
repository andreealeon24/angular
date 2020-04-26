const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "test",
    database: "test",
    connectionLimit: 10
})

pool.query(`select * from registration`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})
