const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3006; // TEAM 06 PORT

app.use(bodyParser.json());
app.use(express.static('./'));

app.post('/submit', (req, res) => {
    console.log('Team 06 Received Data:', req.body);
    res.status(200).send({ message: 'JSON received by Team 06' });
});

app.listen(port, () => {
    console.log(`Team 06 Server Active: http://130.203.136.203:${port}`);
});