module.exports = {
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://amutiara-cs3051-5326061:27017/cs3051', callback)
    }
};