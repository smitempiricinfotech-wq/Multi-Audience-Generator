import type { Request, Response } from 'express';

export function createBulkExport(req: Request, res: Response) {
  const format = String(req.body?.format ?? 'json');
  res.status(202).json({
    exportId: `exp_${Date.now()}`,
    status: 'queued',
    format,
    links: {
      status: '/v2/exports/status'
    }
  });
}
