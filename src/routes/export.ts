import type { Request, Response } from 'express';

export function exportOrders(_req: Request, res: Response) {
  res.json({
    generatedAt: new Date().toISOString(),
    rows: [
      { id: 'ord_1001', total: 42.4 },
      { id: 'ord_1002', total: 19.99 }
    ]
  });
}
