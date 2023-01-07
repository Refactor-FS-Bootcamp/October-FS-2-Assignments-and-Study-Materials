const { MongoClient, ObjectID } = require('mongodb')

const connURL = 'mongodb+srv://admin:admin@cluster0.ifwmjjx.mongodb.net/taskManagerDB?retryWrites=true&w=majority'
const dbName = 'task-manager'

MongoClient.connect(connURL, { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if(error) return console.log('Unable to connect to database')
        const db = client.db(dbName)
        // db.collection('users').insertOne({
        //     name: 'Piyu',
        //     age: 5
        // })

        // db.collection('users').insertMany([
        //     { name: 'Hari', age: 5 },
        //     { name: 'Mousam', age: 32 },
        // ])
        // .then(result => console.log('Data inserted', result.ops))
        // .catch(error => console.log(error))

        // db.collection('users').find({ name: 'Piyu'})
        //     .toArray()
        //     .then(result => console.log('Data found', result))
        //     .catch(error => console.log(error))

        // db.collection('users').updateOne({ _id: new ObjectID("63b68bd1d5acf28660fb717a")},
        //     { $set: { name: 'Radha' }})
        //     .then(result => console.log('Updated data ', result.modifiedCount))
        //     .catch(error => console.log(error))

        // db.collection('users').updateMany({ age: 5},
        //     { $set: { age: 24 }})
        //     .then(result => console.log('Updated data ', result.modifiedCount))
        //     .catch(error => console.log(error))

        db.collection('users').deleteOne({ _id: new ObjectID("63b68bd1d5acf28660fb717a")})
            .then(result => console.log('Deleted data ', result.deletedCount))
            .catch(error => console.log(error))

        db.collection('users').deleteMany({ age: 1 })
            .then(result => console.log('Deleted data ', result.deletedCount))
            .catch(error => console.log(error))
    }    
)