import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";


export default async (req, res, next) => {
    try {
        // Access a specific header
        const cookie = req.cookies.access_token;
        if (!cookie) return next(errorHandler(401, "Unauthenticated Cookie!"));

        const decoded_token = jwt.verify(cookie, process.env.JWT_SECRET);
        const email = decoded_token["email"];

        const validUser = await User.findOne({ email });
            if (!validUser) return next(errorHandler(404, "Unauthenticated Cookie user!!"));

        res.locals.user = validUser;

        return next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({error: "Unauthenticated!!!"})
    }
}