import { Hono } from "hono";
import { products } from "../data/products";

const productRoutes = new Hono();

productRoutes.get("/", (c) => {
  const category = c.req.query("category");
  if (category) {
    const filtered = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    return c.json({ products: filtered, total: filtered.length });
  }
  return c.json({ products, total: products.length });
});

productRoutes.get("/:id", (c) => {
  const id = parseInt(c.req.param("id"));
  const product = products.find((p) => p.id === id);
  if (!product) {
    return c.json({ error: "Product not found" }, 404);
  }
  return c.json(product);
});

export default productRoutes;