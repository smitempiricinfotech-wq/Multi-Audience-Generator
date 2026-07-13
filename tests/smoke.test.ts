import { describe, expect, it } from 'vitest';
import { config } from '../src/store.js';

describe('storefront config', () => {
  it('uses USD defaults', () => {
    expect(config.currency).toBe('USD');
  });
});
