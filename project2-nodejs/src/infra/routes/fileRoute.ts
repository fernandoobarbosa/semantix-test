import express, { Request, Response } from "express";

import { create , remove} from "../../controller/file";
import logger from "../logger";


const fileRoute = (app: express.Application) => {

  app.post("/files", async (req: Request, res: Response) => {
    logger.info("POST /files");
    await create(req, res);
  });
  app.delete("/files", async (req: Request, res: Response) =>{
    logger.info("DELETE /files");
    await remove(req, res);
  });
};

export default fileRoute;
