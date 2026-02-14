import { describe, it, expect } from "bun:test";
import app from "../src/index";

describe("Home endpoint", () => {
  it("GET / should return status and message", async () => {
    const res = await app.fetch(new Request("http://localhost/"));
    const body = await res.json() as any;

    expect(res.status).toBe(200);
    expect(body.status).toBe("running");
    expect(body).toHaveProperty("timestamp");
  });

  it("GET / should return valid ISO timestamp", async () => {
    const res = await app.fetch(new Request("http://localhost/"));
    const body = await res.json() as any;
    const date = new Date(body.timestamp);

    expect(date.toISOString()).toBe(body.timestamp);
  });
});