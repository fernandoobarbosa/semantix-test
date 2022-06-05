import { Request, Response } from "express";

import { uploadFile } from "../utils/goFileApi";
import Folder from "../infra/database/models/folder";
import File from "../infra/database/models/file";
import {FOLDER_NOT_FOUND } from "../infra/consts/messages";

const getFolderByName = async(name: string) => {

    const folder = await Folder.findOne({ name });
    return folder;
}

export const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const getFolderResponse = await getFolderByName(name);

    if(!getFolderResponse) {
        res.status(404).send({ message: FOLDER_NOT_FOUND(name) });
    }

    const uploadFileResponse = await uploadFile(req.files, getFolderResponse?.goFileFolderId ?? '');

    await File.insertMany([{ name: uploadFileResponse.fileName, goFileFolderId: uploadFileResponse.parentFolder, goFileId: uploadFileResponse.fileId }]);

    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
