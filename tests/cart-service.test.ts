import { describe, expect, it } from 'vitest';

function summarize(items: Array<{ sku: string; quantity: number }>) {
  return {
    count: items.length,
    units: items.reduce((sum, item) => sum + item.quantity, 0)
  };
}

describe('cart service', () => {
  it('summarizes saved cart units', () => {
    expect(summarize([
      { sku: 'mug', quantity: 2 },
      { sku: 'bag', quantity: 1 }
    ])).toEqual({ count: 2, units: 3 });
  });
});
