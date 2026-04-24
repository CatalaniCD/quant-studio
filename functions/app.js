import { httpServerHandler } from 'cloudflare:node';
import express from 'express';
import path from 'node:path';

const app = express();

// 1. Serve all files in the 'static' folder (CSS, JS, Images)
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/index.html'));
});

app.get('/applications', (req, res) => {
    res.sendFile(path.resolve('static/applications.html'));
});

app.get('/consulting', (req, res) => {
    res.sendFile(path.resolve('static/consulting.html'));
});

app.get('/perspectives', (req, res) => {
    res.sendFile(path.resolve('static/perspectives.html'));
});

export default httpServerHandler(app);

