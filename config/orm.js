const connection = require("./connection.js");

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
    selectAll: function(table, cb){
        let queryString = `SELECT * FROM ${table};`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    //Expecting a value from name and devoured
    insertOne: function(table, name, devoured, cb){
        let queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES (??, ??)`
        connection.query(queryString, [name, devoured], (err, result)=>{
            if (err) throw err;
            cb(result);
        })
    },
    //Expecting objColVals and condition to be objects
    updateOne: function(table, updateObject, condition, cb){
        let queryString = `UPDATE ${table} SET ${objToSql(updateObject)} WHERE ${condition}`;
        console.log(updateObject);
        console.log(queryString);
        connection.query(queryString, (err, result)=>{
            if (err) throw err;
            cb(result);
        })

    }
};

module.exports = orm;