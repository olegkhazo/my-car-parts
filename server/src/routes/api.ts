import express from 'express';
import { createPart, getAllParts, getSinglePart } from '../controllers/partRequestController';
import { createOffer } from '../controllers/offerController';
import { registerUser, activateUser } from '../controllers/userController';

const router = express.Router();

// ***
// offers and requsts API routers
// ***

// Route for creating new spare part request in DB
router.post('/create-part-request', createPart);

// Route to get all spare part requests from DB
router.get('/all-spare-part-requests-data', getAllParts);

// Route to get single spare part request from DB
router.get('/single-spare-part-request-data/:id', getSinglePart);

// Router for creating single offer entry in DB
router.post('/create-offer', createOffer);


// ***
// User registration and Authorisation API routers
// ***

router.post('/api/register', registerUser);

router.get('/api/activate/:token', activateUser);

export default router;
