

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'webPortalDB'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error , client) => {
    if(error) {
      return  console.log('Unable to start database')
    }

    // console.log('Connected Sucsessfully')
    const db = client.db(databaseName)

    db.collection('Test User').insertOne({
        name:'Satya',
        age: 26
        }, (error, result) => {
            if (error) {
                return console.log('data not inserted')
            }

            console.log(result.ops)
        }
    )
})