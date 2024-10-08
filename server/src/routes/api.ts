import express from 'express';
import { createPart, getAllParts, getSinglePart } from '../controllers/partRequestController';
import { createOffer, getSingleUserSuggestions } from '../controllers/offerController';
import { registerUser, activateUser, authoriseUser, logOut, getUser } from '../controllers/userController';
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();


// ***
// Part requsts API routers
// ***

// Route for creating new spare part request in DB
router.post('/create-part-request', createPart);

// Route to get all spare part requests from DB
router.get('/all-spare-part-requests-data', getAllParts);

// Route to get single spare part request from DB
router.get('/single-spare-part-request-data/:id', getSinglePart);


// ***
// offers and requsts API routers
// ***

// Router for creating single offer entry in DB
router.post('/create-offer', authenticate, createOffer);

// Route to get all car parts suggestions for single registered user 
router.get('/single-user-suggestions/:id', getSingleUserSuggestions);


// ***
// User API routers
// ***

router.post('/sign-up', registerUser);

router.get('/activate/:token', activateUser);

router.post('/login', authoriseUser);

router.get('/user/:id', getUser);

router.post('/logout', logOut);


export default router;
