import type { Context, Next } from "hono";

export const requestLogger = async (c: Context, next: Next) => {
  const start = Date.now();
  const method = c.req.method;
  const path = c.req.path;

  console.log(JSON.stringify({
    level: "info",
    event: "request_start",
    method,
    path,
    timestamp: new Date().toISOString(),
  }));

  await next();

  const duration = Date.now() - start;
  console.log(JSON.stringify({
    level: "info",
    event: "request_end",
    method,
    path,
    status: c.res.status,
    duration_ms: duration,
    timestamp: new Date().toISOString(),
  }));
};