import type { Request, Response } from 'express';

const carts = new Map<string, Array<{ sku: string; quantity: number }>>();

export function addCartItem(req: Request, res: Response) {
  const cartId = String(req.body?.cartId ?? 'default');
  const sku = String(req.body?.sku ?? 'unknown');
  const quantity = Number(req.body?.quantity ?? 1);
  const items = carts.get(cartId) ?? [];

  items.push({ sku, quantity });
  carts.set(cartId, items);

  res.status(201).json({ cartId, items });
}
