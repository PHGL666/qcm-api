var express = require('express');
var router = express.Router();

/* GET subjects. */
router.get('/', function (req, res, next) {
    const { db } = req.app.locals;
    db.collection('subjects').find().toArray((err, subjects) => res.json(subjects));
});

/* GET /subjects/:id */

/* PUT /subjects/:id */


module.exports = router;
