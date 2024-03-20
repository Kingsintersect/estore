import express from 'express';
import { createARecord, readAllRecord, readRecordById, updateRecord, test, deleteRecord } from '../controllers/Category.Controller.js';
import { verifyAuthorization } from '../middleware/verifyAuthorization.middleware.js';

const router = express.Router();

router.post('/test', test);

router.get('/', readAllRecord);
router.get('/:id', readRecordById);
router.post('/create', verifyAuthorization, createARecord);
router.put('/update/:id', verifyAuthorization, updateRecord);
router.delete('/delete/:id', verifyAuthorization, deleteRecord);

export default router;