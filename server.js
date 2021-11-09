const mongoose = require("mongoose");
const dbUri = "mongodb+srv://example-db-uri";
const express = require('express');
const exampleRoutes = require('./routes/exampleRoute')
const app = express();

app.use(exampleRoutes);
app.use(express.json());

app.listen("3000", () => {
    connectToMongoDB();
});

async function connectToMongoDB(){
    await mongoose.connect(dbUri)
    .then((result) => console.log("Connected to Datebase."))
    .catch((err) => console.log(err)); 
}

