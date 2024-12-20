import express from 'express';
const app = express()
const port = 1235
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})