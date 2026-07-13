import express from 'express';
import { login } from './routes/auth.js';
import { createBulkExport } from './routes/export.js';
import { addCartItem } from './routes/cart.js';
import { quoteCheckout } from './routes/checkout.js';
import { categoryTree } from './routes/categories.js';
import { getSavedCart, saveCart } from './routes/savedCarts.js';
import { applyReferralReward } from './routes/referrals.js';

export const app = express();
app.use(express.json());

app.post('/login', login);
app.post('/v2/exports/bulk', createBulkExport);
app.post('/cart/items', addCartItem);
app.post('/checkout/quote', quoteCheckout);
app.get('/categories/tree', categoryTree);
app.post('/saved-carts', saveCart);
app.get('/saved-carts/:savedCartId', getSavedCart);
app.post('/referral-rewards', applyReferralReward);
