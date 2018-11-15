const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => cb(res));
    },
    insertOne: (name, devoured, cb) => {
        orm.insertOne("burgers", name, devoured, (res) => cb(res));
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => cb(res));
    }
};

module.exports = burger;