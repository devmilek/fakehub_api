import { Hono } from "hono";
import { logger } from "hono/logger";
import home from "./routes/home";
import products from "./routes/products";

const app = new Hono();

// Middleware
app.use("*", logger());

// Routes
app.route("/", home);
app.route("/products", products);

const port = parseInt(process.env.PORT || "3000");

console.log(`Server running on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};