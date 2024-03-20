import express from 'express';
import { getSize, getSizeById, createSize, updateSizeById, deleteSizeById } from "../controllers/Size.Controller.js";
import { verifyAuthorization } from '../middleware/verifyAuthorization.middleware.js';

const router = express.Router();

router.get('/', getSize);
router.get('/:id', getSizeById);
router.post('/create', verifyAuthorization, createSize);
router.put('/update/:id', verifyAuthorization, updateSizeById);
router.delete('/delete/:id', verifyAuthorization, deleteSizeById);

export default router;