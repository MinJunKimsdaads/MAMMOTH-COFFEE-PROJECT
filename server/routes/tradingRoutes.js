import express from 'express';
import {getTradingData} from '../controllers/trading.js';

const router = express.Router();

router.get('/trading/search',getTradingData);

export default router;