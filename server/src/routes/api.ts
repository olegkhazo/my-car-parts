import express from 'express';
import { createPart, getAllParts, getSinglePart } from '../controllers/partController';

const router = express.Router();

// Route for creating new spare part request in DB table
router.post('/create-part-request', createPart);

// Route to get all spare part requests from DB table
router.get('/all-spare-part-requests-data', getAllParts);

// Route to get single spare part request from DB table
router.get('/single-spare-part-request-data/:id', getSinglePart);

export default router;
