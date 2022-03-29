var mysql = require('mysql')
var settings = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudappnode'
};

var db;

function connectDatabase() {

    if (!db) {
        db = mysql.createConnection(settings);
        db.connect(
            function(err) {
                if (!err) {
                    console.log("sucess");
                } else {
                    console.log("failed" + err);
                }
            }
        )

    }

    return db;

}

module.exports = connectDatabase();