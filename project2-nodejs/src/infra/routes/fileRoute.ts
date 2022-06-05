import express, { Request, Response } from "express";

import { create } from "../../controller/file";


const fileRoute = (app: express.Application) => {
  app.post("/files", async (req: Request, res: Response) => {
    await create(req, res);
  });
};

export default fileRoute;
