import express from 'express';
import { createARecord, readAllRecord, readRecordById, updateRecord, test, deleteRecord } from '../controllers/Category.Controller.js';
import { verifyAuthorization } from '../middleware/verifyAuthorization.middleware.js';

const router = express.Router();

router.post('/test', test);

router.post('/create', verifyAuthorization, createARecord);
router.get('/read_all', verifyAuthorization, readAllRecord);
router.get('/read/:id', verifyAuthorization, readRecordById);
router.put('/update/:id', verifyAuthorization, updateRecord);
router.delete('/delete/:id', verifyAuthorization, deleteRecord);

export default router;