import { Request, Response } from "express";

import Folder from "../infra/database/models/folder";
import { createFolder } from "../utils/goFileApi";
import {CREATED_FOLDER} from "../infra/consts/messages";

export const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const goFileResponse = await createFolder(name);

    const { id } = goFileResponse.data;

    await Folder.insertMany([{ name: name, goFileFolderId: id }]);
    res.status(201).send(CREATED_FOLDER(name));
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
