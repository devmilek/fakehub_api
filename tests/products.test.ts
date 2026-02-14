import { describe, it, expect } from "bun:test";
import app from "../src/index";

describe("Products endpoint", () => {
  it("GET /products should return all products", async () => {
    const res = await app.fetch(new Request("http://localhost/products"));
    const body = await res.json() as any;
    expect(res.status).toBe(200);
    expect(body.products).toBeArray();
    expect(body.total).toBeGreaterThanOrEqual(2);
  });

  it("GET /products?category=Electronics should filter", async () => {
    const res = await app.fetch(
      new Request("http://localhost/products?category=Electronics")
    );
    
    const body = await res.json() as any;

    expect(res.status).toBe(200);
    body.products.forEach((p: any) => {
      expect(p.category).toBe("Electronics");
    });
  });

  it("GET /products/1 should return a single product", async () => {
    const res = await app.fetch(new Request("http://localhost/products/1"));
    const body = await res.json() as any;

    expect(res.status).toBe(200);
    expect(body.id).toBe(1);
    expect(body).toHaveProperty("name");
    expect(body).toHaveProperty("price");
  });

  it("GET /products/999 should return 404", async () => {
    const res = await app.fetch(new Request("http://localhost/products/999"));

    expect(res.status).toBe(404);
  });
});