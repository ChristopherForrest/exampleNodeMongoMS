const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    userId: {
      type: String,
      required: true  
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Example = mongoose.model('Example', exampleSchema);
module.exports = Example;