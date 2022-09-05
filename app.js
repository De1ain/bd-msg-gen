import express from 'express';

import router from './routes/greeter.js';

const PORT = 3003;

const app = express();

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use(router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));