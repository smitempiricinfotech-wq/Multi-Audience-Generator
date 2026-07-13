import type { Request, Response } from 'express';

export function login(req: Request, res: Response) {
  const subject = String(req.body?.email ?? 'guest@example.com');
  const token = Buffer.from(subject).toString('base64url');

  res.json({
    token,
    legacyToken: `legacy-${token}`,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString()
  });
}
