import http, { IncomingMessage, request, ServerResponse } from 'http';
import dotenv from 'dotenv'
import express from 'express';
import { Genre } from './routes/genreRoutes.js';
import { Home } from './routes/homeRoutes.js';
import { Users } from './routes/userRoutes.js';
import { Cartlines } from './routes/cartlinesRoutes.js';
import { Poster } from './routes/posterRoutes.js';

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, world');
    console.log('Server responded with "Hello, world!"')
});

const port = process.env.PORT || '3000';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', Genre)

app.use('/', Users)

app.use('/', Cartlines)

app.use('/', Poster)

app.use('/', Home)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});