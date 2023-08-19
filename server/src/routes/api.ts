import express from 'express';
import { createPart, getAllParts, getSinglePart } from '../controllers/partController';
import { createOffer } from '../controllers/offerController';

const router = express.Router();

// ***
// spare part request API routers
// ***

// Route for creating new spare part request in DB
router.post('/create-part-request', createPart);

// Route to get all spare part requests from DB
router.get('/all-spare-part-requests-data', getAllParts);

// Route to get single spare part request from DB
router.get('/single-spare-part-request-data/:id', getSinglePart);


// ***
// offers API routers
// ***

// Router for creating single offer entry in DB
router.post('/create-offer', createOffer);

export default router;
