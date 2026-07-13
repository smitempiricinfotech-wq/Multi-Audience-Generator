import type { Request, Response } from 'express';

export function quoteCheckout(req: Request, res: Response) {
  const subtotal = Number(req.body?.subtotal ?? 0);
  const taxRate = Number(req.body?.taxRate ?? 0.0825);
  const shippingAddress = req.body?.shippingAddress ?? {};
  const region = String(shippingAddress.region ?? 'US');

  const taxableSubtotal = Math.max(subtotal, 0);
  const tax = Math.round(taxableSubtotal * taxRate * 100) / 100;
  const total = taxableSubtotal + tax;

  res.json({ region, subtotal: taxableSubtotal, tax, total });
}
