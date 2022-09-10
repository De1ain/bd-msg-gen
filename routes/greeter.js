import express from 'express';

import {
    getIndex,
    getGreeting
} from '../controllers/greeter.js';

const router = express.Router();

router.get('/', getIndex);

router.get('/get-greeting/:person', getGreeting);

router.get('/get-greeting', getGreeting);


export default router;