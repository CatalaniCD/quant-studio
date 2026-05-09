import { httpServerHandler } from 'cloudflare:node';
import express from 'express';
import path from 'node:path';

const app = express();

// 1. Serve all files in the 'static' folder (CSS, JS, Images)
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/index.html'));
});

export default httpServerHandler(app);

