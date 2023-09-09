const express = require('express');
const app = express();
const PORT = 1100;

app.get('/', (req, res) => {
    res.send('Hello project')
})

app.listen(PORT, () => {`app listen on port ${PORT}`})