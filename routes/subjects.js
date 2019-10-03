var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;


/* GET /subjects */
router.get('/', function (req, res, next) {
    const { db } = req.app.locals;
    db.collection('subjects').insertOne(req.body, (err, subject) => res.json(subject));
});

/* GET /subjects/:id */
router.get('/:id', function (req, res, next) {
    const { db } = req.app.locals;
    const { id } = req.params;
    db.collection('subjects').updateOne({ _id: new ObjectID(id) }, { $set: req.body }, (err, subject) => res.json(subject));
});

/* PUT /subjects/:id */
router.get('/:id', function (req, res, next) {
    const { db } = req.app.locals;
    const { id } = req.params;
    db.collection('subjects').updateOne({ _id: new ObjectID(id) }, (err, response) => res.json(response));
});

module.exports = router;

