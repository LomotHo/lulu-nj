const path = require("path");
const rootpath = path.resolve(__dirname, '..');

var config = {
    "serverUrl": "http://127.0.0.1",
    "db": {
        "dialect": 'mysql',
        "database": 'test',
        "username": 'www',
        "password": 'www',
        "host": 'localhost',
        "port": 3306
    },
    "localPort": 8050,
    "browserSyncPort": 3006,
    "rootpath": rootpath,
    "apiPrefix": "/api/v1"
};

module.exports = config;
