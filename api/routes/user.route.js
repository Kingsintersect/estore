import express from 'express';
import { profile, test } from '../controllers/user.controller.js';
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.get('/test', test);
router.get('/profile', auth, profile);

export default router;