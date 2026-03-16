import 'dotenv/config';
import app from './app.js';
import logger from './utils/logger.js';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    logger.error(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});