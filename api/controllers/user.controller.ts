import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import User from "../models/User.model";
import { errorHandler } from "../utils/error";

export const test = (req, res) => {
    res.json({ message: "Api welcome to this route" })
}

export const profile = async (req: Request, res: Response, next: NextFunction) => {
    // Access a specific header
    const token = req.get('Authorization').split(' ')[1];
    if(!token) return next(errorHandler(401, "Unauthenticated Token!"));
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded_token["email"];

    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "Unauthenticated User!"));

    // res.status(200).json({message: "profile worked", cookie: decoded_token, email });
    res.status(200).json( validUser );
}

export const findUserById = (req: Request, res: Response, next: NextFunction) => {

}
export const findUserByJwt = (req: Request, res: Response, next: NextFunction) => {

}
export const findUserByEmail = (req: Request, res: Response, next: NextFunction) => {

}