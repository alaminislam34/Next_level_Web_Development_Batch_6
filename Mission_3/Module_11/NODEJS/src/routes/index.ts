import { readFiles, writeFile } from "../helper/fileDb";
import parseBody from "../helper/parseBody";
import addRoutes from "../helper/RouteHanlder";
import sendJson from "../helper/send-json";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, { message: "Server is running.......", path: req.url });
});

addRoutes("GET", "/api", (req, res) => {
  sendJson(res, 200, { message: "Health status ok", path: req.url });
});

addRoutes("GET", "/api/users", (req, res) => {
  const users = readFiles();
  sendJson(res, 200, users);
});

addRoutes("POST", "/api/create-user", async (req, res) => {
  const body = await parseBody(req);

  let users = readFiles();
  if (!Array.isArray(users)) users = []; // safety check

  const newUser = {
    id: Date.now(),
    ...body,
  };

  users.push(newUser);

  writeFile(users); // <-- send whole array now

  sendJson(res, 201, { success: true, data: newUser });
});
