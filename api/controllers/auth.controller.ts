import User from "../models/User.model";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ firstName, lastName, email, password:hashedPassword });
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    try {
        await newUser.save();
        res.status(201).json("User creaed successfully!");        
    } catch (error) {
        next(error)
    }

}