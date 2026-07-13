import type { Request, Response } from 'express';

const categories = [
  { id: 'home', name: 'Home', children: ['kitchen', 'decor'] },
  { id: 'apparel', name: 'Apparel', children: ['shirts', 'shoes'] }
];

export function categoryTree(_req: Request, res: Response) {
  res.json({ categories, generatedAt: new Date().toISOString() });
}
