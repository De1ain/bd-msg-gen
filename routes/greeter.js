import express from 'express';

import {
    getIndex,
    getGreeting,
    getGreetingPerson
} from '../controllers/greeter.js';

const router = express.Router();

router.get('/', getIndex);

router.get('/get-greeting/:person', getGreetingPerson);

router.get('/get-greeting', getGreeting);


export default router;