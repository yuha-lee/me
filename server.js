const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use('/', express.static(path.resolve(__dirname)));
app.listen(port);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/resources/index.html'));
});
