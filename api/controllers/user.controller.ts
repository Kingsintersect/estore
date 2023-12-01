import { NextFunction, Request, Response } from "express"

export const test = (req, res) => {
    res.json({ message: "Api welcome to this route" })
}

export const profile = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ "profile": true })
}

export const findUserById = (req: Request, res: Response, next: NextFunction) => {

}
export const findUserByJwt = (req: Request, res: Response, next: NextFunction) => {

}
export const findUserByEmail = (req: Request, res: Response, next: NextFunction) => {

}