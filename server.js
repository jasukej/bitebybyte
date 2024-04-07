const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();

const mongo = require("./backend/index.js");

app.use(bodyParser.json());

app.get('*', (req, res) => {
});

app.post('/api/form', createFormHandler);

// after a user finishes submitting their meal log form
function createFormHandler(req, res) {
    const formData = req.body;
    const response = mongo.formResponse(formData);
    res.status(200).json(response);
}
  
app.listen(port, () => {
    console.log('Server is running on port 3001');
});