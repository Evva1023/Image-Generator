const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { openaiRouter } = require('./routes/openaiRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/openai', openaiRouter);


app.listen(port, () => console.log(`Server started on port ${port}`));