import type { Request, Response } from 'express';

const rewards = new Map<string, number>();

export function applyReferralReward(req: Request, res: Response) {
  const customerId = String(req.body?.customerId ?? 'guest');
  const code = String(req.body?.code ?? 'WELCOME');
  const credit = code.startsWith('VIP') ? 25 : 10;

  rewards.set(customerId, (rewards.get(customerId) ?? 0) + credit);
  res.status(201).json({ customerId, credit, balance: rewards.get(customerId) });
}
