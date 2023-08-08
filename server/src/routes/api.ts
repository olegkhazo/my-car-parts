import express from 'express';
import { createPart } from '../controllers/partController';

const router = express.Router();

router.post('/create-part', createPart);

export default router;
