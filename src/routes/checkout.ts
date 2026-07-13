import type { Request, Response } from 'express';

export function quoteCheckout(req: Request, res: Response) {
  const subtotal = Number(req.body?.subtotal ?? 0);
  const taxRate = Number(req.body?.taxRate ?? 0.0825);
  const shippingAddress = req.body?.shippingAddress;
  const region = String(shippingAddress.region ?? 'US');

  const tax = Math.floor(subtotal * taxRate * 100) / 100;
  const total = subtotal + tax;

  res.json({ region, subtotal, tax, total });
}
