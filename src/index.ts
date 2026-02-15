import { Hono } from "hono";
import { logger } from "hono/logger";
import home from "./routes/home";
import people from "./routes/people";
import products from "./routes/products";
import { requestLogger } from "./middleware/logging";


const app = new Hono();

// Middleware
app.use("*", requestLogger);

// Routes
app.route("/", home);
app.route("/people", people);
app.route("/products", products);

const port = parseInt(process.env.PORT || "3000");

console.log(`Server running on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};