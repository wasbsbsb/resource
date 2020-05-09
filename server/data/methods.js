


// 插入数据    changeJson === { name: 'fefg', password: 'hirhgre' }
const insertDocuments = function (db, userCollection, changeJson, callback) {
    const collection = db.collection(userCollection);
    collection.insertMany([
        changeJson
    ], function (err, result) {
        callback(result, err);
    });
}


// 寻找数据   changeJson === {} || {name:'zlc'}
const findDocuments = function (db, userCollection, changeJson, callback) {
    const collection = db.collection(userCollection);
    collection.find(changeJson).toArray(function (err, docs) {
        callback(err, docs);
    });
}


// 修改数据   changeJson ===  { change: { name: 'zlc' },set:{ name: 'zlfsfsc' } }
const updateDocument = function (db, userCollection, changeJson, callback) {
    const collection = db.collection(userCollection);
    collection.updateOne(changeJson.change, { $set: changeJson.set }, function (err, result) {
        callback(result, err);
    });
}


// 删除数据    changeJson === { name: 'lalal' }
const removeDocument = function (db, userCollection, changeJson, callback) {
    const collection = db.collection(userCollection);
    collection.deleteOne(changeJson, function (err, result) {
        callback(err, result);
    });
}


module.exports = {
    insertDocuments,
    findDocuments,
    updateDocument,
    removeDocument
}