import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();


router.get("/api/test", (ctx) => {
  ctx.response.body = { message: "Hello from Deno backend!" };
});

// Define routes
router
  .get("/api/threads", async (context) => {
    // Fetch threads from PostgreSQL
    context.response.body = { threads: [] };
  })
  .post("/api/threads", async (context) => {
    // Create a new thread
    context.response.status = 201;
    context.response.body = { message: "Thread created" };
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
