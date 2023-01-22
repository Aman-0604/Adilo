const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/iNotebook-db";
const DB = "mongodb+srv://techbug:aman0604@cluster0.70vczqo.mongodb.net/iNotebook?retryWrites=true&w=majority";
const connectToMongo = async () => {
    // mongoose.connect(mongoURI, () => {
    //     console.log("Connected to Mongo Successfuly");
    // })
    // mongoose.connect(DB, () => {
    //     console.log("Connected to Mongo Successfuly");
    // })
    mongoose.connect(DB).then(() => {
        console.log("Connected to Mongo Successfuly");
    }).catch((err) => console.log(err));
}
module.exports = connectToMongo;