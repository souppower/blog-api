import * as Express from "express";

const app = Express();

app.get("/", (req: Express.Request, res: Express.Response) => {
  res.send("Hello world.");
  res.end();
});

const server = app.listen(3000, () => {
  console.log("listening to port 3000...");
});

declare const module: any;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}