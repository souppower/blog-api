declare const module: any;

import * as Express from "express";

const app = Express();

app.get("/", (req: Express.Request, res: Express.Response) => {
  res.send("Hello world.");
  res.end();
});

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  const server = app.listen(port);
  console.log("listening to port 3000...");

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}

export default app;
