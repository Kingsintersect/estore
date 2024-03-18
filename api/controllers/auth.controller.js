import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from 'cookie';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });

    try {
        await newUser.save();
        const token = setToken(email, res);
        res.status(200).json({ access_token: token, message: "User creaed successfully!" });
    } catch (error) {
        next(error);
    }

}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        let errors = {};
        if (email.length == 0) errors.email = "Email field must not be empty!";
        if (password.length == 0) errors.password = "Password field must not be empty!";

        if (Object.keys(errors).length > 0) return next(errorHandler(400, errors))

        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "User not found here!"));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong Credentials!"));

        const token = setToken(email, res);
        return res.status(200).json({ access_token: token })
    } catch (error) {
        next(error)
    }

}

const setToken = (email, res) => {
    const access_token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.set(
        'Set-Cookie',
        cookie.serialize('access_token', access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600,
            path: '/',
        })
    );
    return access_token;
}

export const me = async (req, res, next) => {
    return res.json(res.locals.user);
}

export const logout = (req, res) => {
    res.set(
        'Set-Cookie',
        cookie.serialize('access_token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            expires: new Date(0),
            path: '/',
        })
    );

    return res.status(200).json({ success: true })
}