const express = require('express');
const router = express.Router();
const AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "../../../awsconfig.json");

let s3 = new AWS.S3();

router.get('/upload', function(req, res, next) {
  res.render('upload');
});

module.exports = router;