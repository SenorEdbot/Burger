const connection = require("./connection.js");

const dbTable = "burgers_db";

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    all: function(cb){
        let queryString = `SELECT * FROM ${dbTable};`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(cols, vals, cb){
        let colToUpdate = cols.toString();
        let valToUpdate = vals.toString();
        let queryString = `INSERT INTO ${dbTable} (${colToUpdate}) VALUES (${printQuestionMarks(vals.length)})`
    }
};

module.exports = orm;