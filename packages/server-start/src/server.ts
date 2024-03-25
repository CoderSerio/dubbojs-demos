import { createServer } from "http";
import { dubboNodeAdapter } from "@apachedubbo/dubbo-node";
import dubboRoutes from "./router";

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Tri-Service-Group", "dubbo");
  res.setHeader("Tri-Service-Version", "1.0.0");
  if (req.method === "OPTIONS") {
    // 处理预检请求（OPTIONS）
    res.end();
    return;
  }

  console.log("get a request!");
  const handler = dubboNodeAdapter({
    routes: dubboRoutes,
    fallback: (...args) => {
      console.log("fallback", args);
    },
  });
  handler(req, res);
});

server.listen(8000, () => {
  console.log("\ndubbo-js server is running on http://localhost:8000...\n");
});
