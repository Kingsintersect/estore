export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.name = statusCode;
    error.message = message;
    return error;
}