import express from 'express';
import { profile, test } from '../controllers/user.controller';

const router = express.Router();

router.get('/test', test);
router.post('/profile', profile);

export default router;