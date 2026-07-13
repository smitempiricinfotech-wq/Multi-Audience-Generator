import express from 'express';
import { login } from './routes/auth.js';
import { exportOrders } from './routes/export.js';
import { addCartItem } from './routes/cart.js';
import { quoteCheckout } from './routes/checkout.js';
import { categoryTree } from './routes/categories.js';

export const app = express();
app.use(express.json());

app.post('/login', login);
app.get('/v1/export', exportOrders);
app.post('/cart/items', addCartItem);
app.post('/checkout/quote', quoteCheckout);
app.get('/categories/tree', categoryTree);
