import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './routes/greeter.js';

dotenv.config();

const PORT = 3003;
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.cmfz0.mongodb.net/${process.env.MONGODB_DBNAME}`;

const app = express();

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use(router);

mongoose.connect(MONGODB_URI)
    .then(result => {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.log(err));