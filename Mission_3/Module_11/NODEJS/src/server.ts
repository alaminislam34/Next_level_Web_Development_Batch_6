import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running ........");
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello from node.js with typescirpt",
          path: req.url,
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
