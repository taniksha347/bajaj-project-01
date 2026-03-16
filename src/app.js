import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';
import sendResponse from './utils/response.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/bfhl', routes);

app.get('/health', (req, res) => {

    return sendResponse(res, 200, true);

});

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

export default app;
