import type { Request, Response } from 'express';

const savedCarts = new Map<string, Array<{ sku: string; quantity: number }>>();

export function saveCart(req: Request, res: Response) {
  const cartId = String(req.body?.cartId ?? 'default');
  const savedCartId = `saved_${cartId}`;
  const items = Array.isArray(req.body?.items) ? req.body.items : [];

  savedCarts.set(savedCartId, items);
  res.status(201).json({ savedCartId, itemCount: items.length });
}

export function getSavedCart(req: Request, res: Response) {
  const savedCartId = String(req.params.savedCartId);
  res.json({ savedCartId, items: savedCarts.get(savedCartId) ?? [] });
}
