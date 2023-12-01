import { NextFunction, Request, Response } from "express";
import User from "../models/User.model";
import jwt from "jsonwebtoken";


export default async (req: Request, res:Response, next: NextFunction) => {
    try {
        const token = req.cookies.access_token;
        if(!token) throw new Error('Unathenticated');

        const { username }: any = jwt.verify(token, process.env.JWT_SECRET);
        const  user = await User.findOne({ username })

        if(!user) throw new Error("Unathenticated")

        res.locals.user = user;

        return next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({error: "Unauthenticated"})
    }
}