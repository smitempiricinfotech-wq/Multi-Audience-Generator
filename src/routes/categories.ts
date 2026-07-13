import type { Request, Response } from 'express';

const categories = [
  { id: 'home', name: 'Home', children: ['kitchen', 'decor'] },
  { id: 'apparel', name: 'Apparel', children: ['shirts', 'shoes'] }
];

let cachedTree: { categories: typeof categories; generatedAt: string } | null = null;

export function categoryTree(_req: Request, res: Response) {
  cachedTree ??= { categories, generatedAt: new Date().toISOString() };
  res.json(cachedTree);
}
