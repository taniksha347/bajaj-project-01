import sendResponse from '../utils/response.js';

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    sendResponse(res, 404, false, error.message);
    next(error);
};

export default notFound;
