import { Hono } from "hono";

const home = new Hono();

home.get("/", (c) => {
  return c.json({
    message: "DevOps Hono App",
    version: process.env.APP_VERSION || "1.0.0",
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

export default home;