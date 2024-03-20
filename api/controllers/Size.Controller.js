
import { errorHandler } from "../utils/error.js";
import Size from "../models/Size.model.js";
import { toCamelCase } from "../utils/utilities.js";

export const createSize = async (req, res, next) => {
    const reqSizeFields = { ...req.body };

    reqSizeFields.name = toCamelCase(reqSizeFields.name)
    const newSize = new Size(reqSizeFields);
    try {
        const uniqueSize = await Size.findOne({ name: reqSizeFields.name });

        if (uniqueSize) return next(errorHandler(404, "This Size Entity Already Exists!"));
        await newSize.save();
        res.status(200).json({ newSize, message: "Size Record created successfully!" });
    } catch (error) {
        // next(error)
        res.status(500).json(error.message);
    }
    return;
}

export const getSize = async (req, res, next) => {

    try {
        const allSize = await Size.find({});
        if (!allSize) return next(errorHandler(404, "Empty Size Record!"));

        res.status(200).json(allSize);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getSizeById = async (req, res, next) => {

    try {
        const SingleSize = await Size.findById(req.params.id);
        if (!SingleSize) return next(errorHandler(404, "Could not find this size record!"));

        res.status(200).json(SingleSize);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const updateSizeById = async (req, res, next) => {

    try {
        const updatedRecord = await Size.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(201).json({ message: "Record updated successfully...", updatedRecord });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const deleteSizeById = async (req, res, next) => {

    try {
        await Size.findByIdAndDelete(req.params.id);

        res.status(201).json({ message: "Record deleted successfully!" });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

