import express from 'express';
import { createOffer, getSingleUserSuggestions } from '../controllers/offerController';
import { registerUser, activateUser, authoriseUser, logOut, getUser, getAllUsers, updateUser, deleteUser } from '../controllers/userController';
import { createPart, getAllParts, getSinglePart, getRequestsByUser, deleteRequest } from '../controllers/partRequestController';
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();


// ***
// Part requsts API routers
// ***

// Route for creating new spare part request in DB
router.post('/create-part-request', createPart);

// Route to get all spare part requests from DB
router.get('/all-spare-part-requests-data', getAllParts);

// Get all parts requests for a single user by his ID
router.get('/single-user-requests/:id', getRequestsByUser);

// Route to get single spare part request from DB
router.get('/single-spare-part-request-data/:id', getSinglePart);

// Route for deleting single part request by ID
router.delete('/delete-part-request/:id', deleteRequest);


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

router.get('/users', getAllUsers);

router.put('/user/:id', updateUser);

router.delete('/delete-user/:id', deleteUser);

export default router;
