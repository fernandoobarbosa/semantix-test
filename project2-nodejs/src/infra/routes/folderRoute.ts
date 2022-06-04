import express, { Request, Response } from "express";

const folderRoute = (app: express.Application) => {
  app.post("/folders", async (req: Request, res: Response) => {
    res.send("create folder");
  });
};

export default folderRoute;
