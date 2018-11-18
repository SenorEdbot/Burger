const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => cb(res));
    },
    insertOne: (name, devoured, cb) => {
        orm.insertOne("burgers", name, devoured, (res) => cb(res));
    },
    updateOne: (updateObject, condition, cb) => {
        orm.updateOne("burgers", updateObject, condition, (res) => cb(res));
    }
};

module.exports = burger;