const path = require('path');

const express = require('express');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const rootDir = require('./utils/pathUtils.js');

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/", hostRouter);

app.use(function(req, res, next){
  res.sendFile(path.join(rootDir,'views', '404.html'));
  });
const PORT = 3000;
app.listen(PORT, function(){
  console.log(`server is running on http://localhost:${PORT}`);
});