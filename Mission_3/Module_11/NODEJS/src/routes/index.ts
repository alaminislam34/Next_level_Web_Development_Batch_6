import parseBody from "../helper/parseBody";
import addRoutes from "../helper/RouteHanlder";
import sendJson from "../helper/send-json";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, { message: "Server is running.......", path: req.url });
});

addRoutes("GET", "/api", (req, res) => {
  sendJson(res, 200, { message: "Health status ok", path: req.url });
});

addRoutes("POST", "/api/create-user", async (req, res) => {
  const body = await parseBody(req);
  sendJson(res, 201, { success: true, data: body });
});
