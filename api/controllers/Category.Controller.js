import { errorHandler } from "../utils/error.js";
import Category from "../models/Category.model.js";
import { toCamelCase } from "../utils/utilities.js";


export const createARecord = async (req, res, next) => {
    // Access a specific header
    const categoryFields = { ...req.body };
    if (categoryFields.level == 1) categoryFields.parentCategory = "NULL";
    categoryFields.title = toCamelCase(categoryFields.title)

    // CREATE NEW A CATEGORY +++++  ADMIN AUTHORIZATION ONLY
    const newCategory = new Category(categoryFields);
    try {
        let errors = {};
        for (const key in categoryFields) {
            if (categoryFields[key].length == 0) errors[key] = `${key} must not have a value`;
        }
        if (Object.keys(errors).length > 0) return next(errorHandler(400, errors))

        const uniqueCategory = await Category.findOne({ title: categoryFields.title });

        if (uniqueCategory) return next(errorHandler(404, "Title Of this Category Already Exists!"));

        await newCategory.save();
        res.status(200).json({ message: "Category Record created successfully!" });
    } catch (error) {
        // next(error)
        res.status(500).json(error.message);
    }
    return;
}

export const readAllRecord = async (req, res, next) => {

    try {
        const allCategory = await Category.find({});
        if (!allCategory) return next(errorHandler(404, "Empty Category Record!"));

        res.status(200).json(allCategory);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const readRecordById = async (req, res, next) => {

    try {
        const SingleCategory = await Category.findById(req.params.id);
        if (!SingleCategory) return next(errorHandler(404, "Could not find this category record!"));

        res.status(200).json(SingleCategory);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const updateRecord = async (req, res, next) => {

    try {
        const updatedRecord = await Category.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(201).json({ message: "Record updated successfully...", updatedRecord });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const deleteRecord = async (req, res, next) => {

    try {
        await Category.findByIdAndDelete(req.params.id);

        res.status(201).json({ message: "Record deleted successfully!" });
    } catch (error) {
        res.status(500).json(error.message);
    }
}












export const test = (req, res) => {
    res.json({ message: "Api welcome category route", body: { ...req.body } })
}
