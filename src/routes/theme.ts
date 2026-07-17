import type { Request, Response } from 'express';

export function storefrontTheme(_req: Request, res: Response) {
  res.json({ mode: 'dark' });
}
