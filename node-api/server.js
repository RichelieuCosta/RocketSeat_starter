const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('hello Rocketseat. Teste 1 2 3');

});

app.listen(3001);