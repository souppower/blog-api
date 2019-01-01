import * as express from "express";

const setupHandlers = (app: express.Application) => {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
    res.end();
  });
};

export default setupHandlers;
