import express from 'express';
import { logout, me, signin, signup } from '../controllers/auth.controller';
import auth from '../middleware/auth.middleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/me', auth, me);
router.get('/logout', auth, logout);

export default router;
