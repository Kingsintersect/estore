export const errorHandler = (statusCode: string | number, message: string) => {
    const error = new Error();
    error.name = String(statusCode);
    error.message = message;
    return error;
}