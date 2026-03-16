import express from 'express';
import { getBfhl, postBfhl } from '../controllers/bfhl.controller.js';

const router = express.Router();

router.get('/', getBfhl);
router.post('/', postBfhl);

export default router;