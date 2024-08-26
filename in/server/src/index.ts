import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

/* ROUTE IMPORTS */
import dashboardRoutes from './routes/dashboardRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import expenseRoutes from './routes/expenseRoutes';

/* CONFIGURATIONS */
dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Built-in middleware for JSON parsing
app.use(helmet()); // Security headers
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })); // Handle cross-origin resource policy
app.use(morgan('common')); // HTTP request logger
app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use(cors()); // Enable CORS

/* ROUTES */
app.use('/dashboard', dashboardRoutes); // http://localhost:3001/dashboard
app.use('/products', productRoutes); // http://localhost:3001/products
app.use('/users', userRoutes); // http://localhost:3001/users
app.use('/expenses', expenseRoutes); // http://localhost:3001/expenses











/* SERVER */
const port = Number(process.env.PORT) || 3001;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
