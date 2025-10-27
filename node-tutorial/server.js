import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/router.js';
import connectDB from './config/databaseconnection.js';

// Route access old way
// const productRoutes = require('./routes/product.js');
// const authRoutes = require('./routes/auth.js');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.API_PORT;

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({limit: '10mb'}));
app.use(express.json());
app.use(router);

// Route access old way
// app.use('/api', productRoutes);
// app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});