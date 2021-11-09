const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const ExampleLogic = require('../logic/exampleLogic');


const exampleLogic = new ExampleLogic();

router.get('/getExampleById', (req, res) => {
    const promise = exampleLogic.getExampleById(req.query);
    promise.then(response => {
        if(response) {
            res.send(response);
        } else {
            res.sendStatus(404);
        }
    }).catch(err => {
        sendErrorReport(err);
    });
});

router.get('/getExampleByUserId', (req, res) => {
    const promise = exampleLogic.getExampleByUserId(req.query);
    promise.then(response => {
        if(response) {
            res.send(response);
        } else {
            res.sendStatus(404);
        }
    }).catch(err => {
        sendErrorReport(err);
    });
});

router.get('/getExamples', (req, res) => {
    const promise = exampleLogic.getExamples(req.query);
    promise.then(response => {
        if(response) {
            res.send(response);
        } else {
            res.sendStatus(404);
        }
    }).catch(err => {
        sendErrorReport(err);
    });
});

router.put('/updateExample', (req, res) => {
    const promise = exampleLogic.updateExample(req.query)
    promise.then(response => {
        if(response) {
            res.send(response);
        } else {
            res.sendStatus(500);
        }
    }).catch(err => {
        sendErrorReport(err);
    });
});

router.post('/saveExample', (req, res) => {
   const promise = exampleLogic.saveExample(req.query);
   handleGenericResponse(promise, res);
});

router.post('/deleteExample', (req, res) => {
    const promise = exampleLogic.deleteExample(req.query)
    handleGenericResponse(promise, res);
});



function handleGenericResponse(promise, res) {
    promise.then(response => {
        if(response) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }).catch(err => {
        sendErrorReport(err);
    });
}

function sendErrorReport(err) {
    console.log(err)
}

module.exports = router;