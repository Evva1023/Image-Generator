const { Router } = require('express');
const { generateImage } = require('../controllers/openai.controller');

const openaiRouter = Router();

openaiRouter.post('/generateimage', generateImage);

module.exports = {
    openaiRouter,
};