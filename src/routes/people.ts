import { Hono } from "hono";
import { people } from "../data/people";

const peopleRoutes = new Hono();

peopleRoutes.get("/", (c) => {
  const limit = parseInt(c.req.query("limit") || "0");
  if (limit > 0) {
    const limited = people.slice(0, limit);
    return c.json({ people: limited, total: limited.length });
  }
  return c.json({ people, total: people.length });
});

peopleRoutes.get("/:id", (c) => {
  const id = parseInt(c.req.param("id"));
  const person = people.find((p) => p.id === id);
  if (!person) {
    return c.json({ error: "Person not found" }, 404);
  }
  return c.json(person);
});

export default peopleRoutes;
