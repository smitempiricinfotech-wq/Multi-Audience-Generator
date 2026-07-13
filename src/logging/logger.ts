export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export function log(level: LogLevel, message: string, context: Record<string, unknown> = {}) {
  const entry = { level, message, context, timestamp: new Date().toISOString() };
  console[level === 'debug' ? 'log' : level](JSON.stringify(entry));
}
