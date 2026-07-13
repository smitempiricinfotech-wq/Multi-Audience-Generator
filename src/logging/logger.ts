export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type LogContext = Record<string, unknown>;

function write(entry: { level: LogLevel; message: string; context: LogContext; timestamp: string }) {
  const output = JSON.stringify(entry);
  if (entry.level === 'debug') {
    console.log(output);
    return;
  }
  console[entry.level](output);
}

export function createLogger(defaultContext: LogContext = {}) {
  return {
    log(level: LogLevel, message: string, context: LogContext = {}) {
      write({
        level,
        message,
        context: { ...defaultContext, ...context },
        timestamp: new Date().toISOString()
      });
    }
  };
}

export const logger = createLogger();
