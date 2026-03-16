import express from 'express';
import bfhlRoutes from './bfhl.routes.js';

const router = express.Router();

router.use('/', bfhlRoutes);

export default router;
