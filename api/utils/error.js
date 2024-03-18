export const errorHandler = (statusCode, message) => {
    let error = new Error();
    // error.statusCode = String(statusCode);
    error.name = String(statusCode);
    error.message = message;
    return error;
}

export const mapErrors = (errors) => {
    return errors.reduce((prev, err) => {
        prev[err.property] = Object.entries(err.constraints)[0][1];
        return prev;
    }, {})
}