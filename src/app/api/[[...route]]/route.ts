import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (context) => {
  return context.json({ hello: "hi" });
});

app.get("project/:projectId", (context) => {
  const { projectId } = context.req.param();
  return context.json({ project: projectId });
});

export const GET = handle(app);
