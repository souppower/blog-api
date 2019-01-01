import * as express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world");
  res.end();
});

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log("listening to port 3000...");
}

export default app;
