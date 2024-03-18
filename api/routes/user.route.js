import express from 'express';
import { profile, test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.get('/profile', profile);

export default router;