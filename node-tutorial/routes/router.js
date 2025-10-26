import express from 'express';
import productRouter from './product.router.js';
import homeRouter from './home.router.js';

const router = express.Router();
productRouter(router);
homeRouter(router);

export default router;