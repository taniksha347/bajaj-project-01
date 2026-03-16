const sendResponse = (res, statusCode, success, data = null) => {
    const status = statusCode || (success ? 200 : 400);
    res.status(status).json({
        is_success: success,
        official_email: 'kunal0638.be23@chitkara.edu.in',
        data: data ? data : undefined,
    });
};

export default sendResponse;
