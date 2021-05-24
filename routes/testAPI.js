var express = require('express');
var router = express.Router();
'use strict';

router.get('/', function(req, res, next) {

    const fs = require('fs');

    let rawdata = fs.readFileSync('sample.json');
    let data = JSON.parse(rawdata);

    res.send(data);
});

module.exports = router;