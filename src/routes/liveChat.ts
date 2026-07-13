import type { Request, Response } from 'express';

export function liveChatWidget(_req: Request, res: Response) {
  res.json({
    provider: 'helpdesk',
    enabled: true,
    launcherText: 'Chat with us'
  });
}
