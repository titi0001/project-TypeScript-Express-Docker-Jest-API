import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import Cars from './Routes/CarRoutes';
import Motorcycles from './Routes/MotorcyclesRoute';

const app = express();
app.use(express.json());
app.use('/', Cars);
app.use('/motorcycles', Motorcycles);
app.use(ErrorHandler.handle);

export default app;
