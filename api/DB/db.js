import { MongoClient } from 'mongodb';

let dbConnection;

export const connectToDb = (runAfterConnectionEsterblished) => {
    MongoClient.connect('mongodb://localhost:27017/outfit_collection')
        .then((client) => {
            dbConnection = client.db();
            console.log("Connected to local MongoDB database");
            return runAfterConnectionEsterblished();
        })
        .catch((err) => {
            console.log(err);
            return runAfterConnectionEsterblished(err);
        })
}

export const getDB = () => dbConnection

