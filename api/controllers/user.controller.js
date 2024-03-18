import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
    res.json({ message: "Api welcome to this route" })
}

export const profile = async (req, res, next) => {
    // Access a specific header
    const token = req.get('Authorization').split(' ')[1];
    if (!token) return next(errorHandler(401, "Unauthenticated Token!"));
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded_token["email"];

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "Unauthenticated User!"));
        const { password: pass, ...userInfo } = validUser['_doc'];

        // res.status(200).json({message: "profile worked", cookie: decoded_token, email });
        res.status(200).json(userInfo);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const findUserById = (req, res, next) => {

}
export const findUserByJwt = (req, res, next) => {

}
export const findUserByEmail = (req, res, next) => {

}
