import express from 'express';
import dotenv from 'dotenv';

import { initDB } from './config/db.js';
import ratelimiter from './middleware/rateLimiter.js';
import transansactionsRoute from './routes/transactionsRoute.js'

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(ratelimiter)


app.get("/test", (req, res) => {
    res.send("Its working");
});

app.use("/api/transactions",transansactionsRoute )

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
