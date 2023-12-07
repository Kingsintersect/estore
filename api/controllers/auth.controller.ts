import { NextFunction, Request, Response } from "express";
import User from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from 'cookie';
import { errorHandler } from "../utils/error";

export const signup = async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    // CREATE THE USER
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });
    // res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    try {
        await newUser.save();
        res.status(200).json({message: "User creaed successfully!"});
    } catch (error) {
        next(error)
    }

}

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        let errors: any = {};
        if(email.length == 0) errors.email = "Email field must not be empty!";
        if(password.length == 0) errors.password = "Password field must not be empty!";

        if(Object.keys(errors).length > 0) return next(errorHandler(400, errors))

        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "User not found here!"));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong Credentials!"));
        const access_token = jwt.sign({ email }, process.env.JWT_SECRET);
        const { password: pass, ...userInfo } = validUser['_doc'];

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

        return res.status(200).json({ userInfo, access_token })
    } catch (error) {
        next(error)
    }

}

export const me = async (req: Request, res:Response, next: NextFunction) => {
    return res.json(res.locals.user);
}

export const logout = (req: Request, res:Response) => {
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

    return res.status(200).json({ success : true })
}