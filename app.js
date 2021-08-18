  
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const userRoute = require('./routes/user');
app.use("/user",userRoute);

app.listen(3000);