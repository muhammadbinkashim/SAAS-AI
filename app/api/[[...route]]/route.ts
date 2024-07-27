import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { Dawning_of_a_New_Day } from "next/font/google";

export const runtime = "edges";

const app = new Hono().basePath("/api");


Dawning_of_a_New_Day

app
  .get("hello", (c) => {
    return c.json({
      message: "Hello Next.js",
    });
  })

  .get(
    '/hello/:test',
    (c) => {
      return c.json({
        message: `Hello World`,
      });
    }
  )

export const GET = handle(app);
export const POST = handle(app);
