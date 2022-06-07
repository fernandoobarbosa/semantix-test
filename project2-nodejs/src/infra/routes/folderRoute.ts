import express, { Request, Response } from "express";

import {create} from '../../controller/folder';
import logger from "../logger";

const folderRoute = (app: express.Application) => {
  logger.info("POST /folders");
  app.post("/folders", async (req: Request, res: Response) => {
    await create(req, res)
  });
};

export default folderRoute;
