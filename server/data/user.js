const MongoClient = require('mongodb').MongoClient;

const methodsChange = require('./methods')

const url = 'mongodb://localhost:27017';
const dbName = 'user';

const userCollection = 'userlist';





MongoClient.connect(url, function (err, client) {
    const db = client.db(dbName);



    

    // // 插入数据
    // methodsChange.insertDocuments(db, userCollection, { name: 'fewfewfwefwgthrt', password: 'hirhgre' }, (res, err) => {
    //     console.log(res, err);
    // })


    // // 寻找数据
    // methodsChange.findDocuments(db, userCollection, { name: 'fewfewfwefwgthrt' }, (err, res) => {
    //     console.log(res, err);
    // })



    // // 修改数据
    // methodsChange.updateDocument(db, userCollection, { change: { name: 'zlc' }, set: { name: 'zlfsfsc' } }, (err, res) => {
    //     console.log(res, err);
    // })


    // // 删除数据
    // methodsChange.removeDocument(db, userCollection, { name: 'zlc' }, (err, res) => {
    //     console.log(res, err);
    // })


    client.close();
});









