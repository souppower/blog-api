import * as express from "express";

import setupHandlers from "./interface/handlers";

const app = express();
setupHandlers(app);

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log("listening to port 3000...");
}

export default app;
