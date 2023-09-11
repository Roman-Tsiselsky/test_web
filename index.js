const express = require('express');
const app = express();
const PORT = 1100;
const router = require('./routes/index.js');


app.use('/api', router);

app.listen(PORT, () => {console.log(`app listen on port ${PORT}`)})