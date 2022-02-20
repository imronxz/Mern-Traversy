import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';
import GoalsRoutes from './routes/GoalsRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', GoalsRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`server running on port${port}`));
