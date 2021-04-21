const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();
var User = require('./Controllers/User');
var GetData = require('./Controllers/GetData');
const { json } = require('express');
app.use(express.json());
app.use(cors());

const port = 3000; 

app.use('/',User);

app.use('/getdata',GetData)     

app.listen(port, () => {
    console.log(`listen on port ${port}`);
});