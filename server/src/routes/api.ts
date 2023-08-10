import express from 'express';
import { createPart, getAllParts } from '../controllers/partController';

const router = express.Router();

// Route for creating new spare part request in DB table
router.post('/create-part-request', createPart);

// Route to get all spare part requests from DB table
router.get('/all-spare-part-requests-data', getAllParts);

export default router;
