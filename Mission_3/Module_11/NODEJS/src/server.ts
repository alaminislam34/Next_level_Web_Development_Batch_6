import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helper/RouteHanlder";
import './routes'

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running ........");
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const methodMap = routes.get(method);

    const handler: RouteHandler | undefined = methodMap?.get(path);
    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          message: "Route not found!!!",
          path,
        })
      );
    }

    if (req.url == "/api" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Health status ok",
          path: req.url,
        })
      );
    }

    if (req.url == "/api/create-user" && req.method == "POST") {
      res.writeHead(201, { "content-type": "application/json" });
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        try {
          const parseBody = JSON.parse(body);
          console.log(parseBody);
          res.end(JSON.stringify(parseBody));
        } catch (err: any) {
          console.log(err?.message);
        }
      });
    }
  }
);

server.listen(config.port, () => {
  console.log("Server is running on port:", config.port);
});
