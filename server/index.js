import express from 'express';
import kospi200Routes from './routes/kospi200Routes.js';
import salesRoutes from './routes/salesRoutes.js'
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api',kospi200Routes);
app.use('/api',salesRoutes);
app.listen(PORT,()=>{
    console.log('server running');
});