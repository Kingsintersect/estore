import express from 'express';
import { createARecord, readAllRecord, readRecordById, updateRecord, test, deleteRecord } from '../controllers/Category.Controller.js';

const router = express.Router();

router.post('/test', test);

router.post('/create', createARecord);
router.get('/read_all', readAllRecord);
router.get('/read/:id', readRecordById);
router.put('/update/:id', updateRecord);
router.delete('/delete/:id', deleteRecord);

export default router;