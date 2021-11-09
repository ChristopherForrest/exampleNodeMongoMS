const mongoose = require('mongoose');
const Example = require('../models/Example')
var ObjectId = require('mongodb').ObjectId;

module.exports = class ExampleLogic {

    getExampleById(params) {
        return Example.findOne({_id: ObjectId(params.id)});
    }

    getExampleByUserId(params) {
        return Example.find({userId: params.userId});
    }

    getExamples(params) {
        return Example.find();
    }

    saveExample(params) { 
        const Example = new Example({
                title: params.title,
                description: params.description,
                image: params.image,
                userId: params.userId
        });

        return Example.save();
    }

    updateExample(params) {
        return Example.findOneAndUpdate({userId: params.userId}, {image: params.changes})
    }

    deleteExample(params) {
        return Example.findOneAndDelete({image: params.image});
    }

}