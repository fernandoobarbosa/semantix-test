import express, { Request, Response } from "express";

import {create} from '../../controller/folder';

const folderRoute = (app: express.Application) => {
  app.post("/folders", async (req: Request, res: Response) => {
    await create(req, res)
  });
};

export default folderRoute;
