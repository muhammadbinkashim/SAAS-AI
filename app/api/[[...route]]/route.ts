
import { Hono } from "hono";
import { handle } from "hono/vercel";


export const runtime = "edges";

const app = new Hono().basePath("/api");

app
  .get(
  "/hello", (c) => {
    return c.json({ hello: "World"})
  }
  );


export const GET = handle(app);
export const POST = handle(app);
