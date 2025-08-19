import express from 'express';
import cors from 'cors';
import kospi200Routes from './routes/kospi200Routes.js';
import salesRoutes from './routes/salesRoutes.js';
import indicatorRountes from './routes/indicatorRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/api',kospi200Routes);
app.use('/api',salesRoutes);
app.use('/api',indicatorRountes);
app.listen(PORT,()=>{
    console.log('server running');
});