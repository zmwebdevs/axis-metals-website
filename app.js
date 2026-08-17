import { createServer } from "node:http";
import next from "next";

const port = Number(process.env.PORT || 3000);
const app = next({
  dev: false,
  port,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res);
    }).listen(port);
  })
  .catch((error) => {
    console.error("Failed to start Next.js", error);
    process.exit(1);
  });
