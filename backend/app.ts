// deno-lint-ignore-file require-await
import { Application, Router, Context } from "oak";

const app = new Application();
const router = new Router();

// GET /api/test
router.get("/api/test", (ctx: Context) => {
  ctx.response.body = { message: "Hello from Deno backend!" };
});

// GET /api/threads
router.get("/api/threads", async (ctx: Context) => {
  try {
    // Fetch threads from PostgreSQL or any other DB.
    // For now, just return an empty array:
    ctx.response.body = { threads: [] };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Failed to fetch threads" };
    console.error("Error fetching threads:", error);
  }
});

// POST /api/threads
router.post("/api/threads", async (ctx: Context) => {
  try {
    const body = ctx.request.body;
    const data = await body.json();
    console.log("Thread data:", data);

    // Process the data as needed
    ctx.response.status = 201;
    ctx.response.body = {
      message: "Thread created successfully",
      data,
    };
  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Failed to create thread" };
    console.error("Error creating thread:", error);
  }
});


app.use(router.routes());
app.use(router.allowedMethods());

// Log server startup
console.log("Server running on http://localhost:8000");

// Start the server
await app.listen({ port: 8000 });
