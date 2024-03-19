import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const verifyAuthorization = (req, res, next) => {
    const token = req.headers.access_token;
    if (!token) return res.status(401).json("Access-Denied!");

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified.isAdmin) return res.status(401).json("Access-Denied! You do not have Admin Privilages");
        req.user = verified;

        next();
    } catch (error) {
        res.status(400).json("Unauthorized user !")
    }
}