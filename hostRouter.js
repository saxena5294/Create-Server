const path = require('path');

const express = require('express');
const hostRouter = express.Router();

//local modules
const rootDir = require('../utils/pathUtils.js');



hostRouter.get("/add-home", function(req, res, next){res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post("/add-home", function(req, res, next){
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});


module.exports = hostRouter;