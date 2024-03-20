import { errorHandler } from "../utils/error.js";
import Product from "../models/Product.model.js";
import { toCamelCase } from "../utils/utilities.js";

export const createProduct = async (req, res, next) => {
    const reqProductFields = { ...req.body };

    reqProductFields.title = toCamelCase(reqProductFields.title)
    const newProduct = new Product(reqProductFields);
    try {
        await newProduct.save();
        res.status(200).json({ newProduct, message: "Product Record created successfully!" });
    } catch (error) {
        // next(error)
        res.status(500).json(error.message);
    }
    return;
}

export const readAll = async (req, res, next) => {

    try {
        const allProduct = await Product.find({});
        if (!allProduct) return next(errorHandler(404, "Empty Product Record!"));

        res.status(200).json(allProduct);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const readById = async (req, res, next) => {

    try {
        const SingleProduct = await Product.findById(req.params.id);
        if (!SingleProduct) return next(errorHandler(404, "Could not find this category record!"));

        res.status(200).json(SingleProduct);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const updateproductById = async (req, res, next) => {

    try {
        const updatedRecord = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(201).json({ message: "Record updated successfully...", updatedRecord });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const deleteProductById = async (req, res, next) => {

    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(201).json({ message: "Record deleted successfully!" });
    } catch (error) {
        res.status(500).json(error.message);
    }
}
















export const test = (req, res) => {
    res.json({ message: "Api welcome product route", body: { ...req.body } })
}
