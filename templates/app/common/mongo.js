const mongoist = require('mongoist');
const conf = require('../config');
const db = mongoist(conf.mongodb.url, conf.mongodb.ops);
module.exports = db;
global.ObjectId = mongoist.ObjectId;