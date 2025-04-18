import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:fya9OynJq6PIx7pQ@backend.uuiszsy.mongodb.net/?retryWrites=true&w=majority&appName=Backend'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }