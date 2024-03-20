import express from 'express';
import { test, readAll, readById, createProduct, updateproductById, deleteProductById } from '../controllers/Product.controller.js';
import { verifyAuthorization } from '../middleware/verifyAuthorization.middleware.js';

const router = express.Router();

router.post('/test', test);

router.get('/', readAll);
router.get('/:id', readById);
router.post('/create', verifyAuthorization, createProduct);
router.put('/update/:id', verifyAuthorization, updateproductById);
router.delete('/delete/:id', verifyAuthorization, deleteProductById);


export default router;