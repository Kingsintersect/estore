import { log } from "console";

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

export const handleErrors = (err) => {
    log(err.message, err.code);
    let errors = { email: "", password: "" };

    // if duplicate error code
    if (err.cod === 11000) {
        errors.email = "This Email Already Exists!";
        return errors;
    }

    // validate errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}