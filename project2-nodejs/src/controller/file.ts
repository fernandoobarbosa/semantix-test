import { Request, Response } from "express";

import { uploadFile, removeFile } from "../utils/goFileApi";
import Folder from "../infra/database/models/folder";
import File from "../infra/database/models/file";
import { FOLDER_NOT_FOUND, FILE_NOT_FOUND, CREATED_FILE } from "../infra/consts/messages";
import logger from "../infra/logger";

const getFolderByName = async (name: string) => {
  logger.info("fileController - getFolderByName");
  const folder = await Folder.findOne({ name });
  return folder;
};

const getFileByNameAndFolderId = async (name: string, folderId: string) => {
  logger.info("fileController - getFileByNameAndFolderId");
  const file = await File.findOne({ name, goFileFolderId: folderId });
  return file;
};

export const create = async (req: Request, res: Response) => {
  logger.info("fileController - create");
  try {
    const { folder } = req.body;

    const getFolderResponse = await getFolderByName(folder);

    if (!getFolderResponse) {
      res.status(404).send(FOLDER_NOT_FOUND(folder));
    }

    const uploadFileResponse = await uploadFile(
      req.files,
      getFolderResponse?.goFileFolderId ?? ""
    );

    await File.insertMany([
      {
        name: uploadFileResponse.fileName,
        goFileFolderId: uploadFileResponse.parentFolder,
        goFileId: uploadFileResponse.fileId,
      },
    ]);

    res.status(201).send(CREATED_FILE(uploadFileResponse.fileName));
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export const remove = async (req: Request, res: Response) => {
  logger.info("fileController - remove");
  try {
    const { folder, file } = req.body;

    const getFolderResponse = await getFolderByName(folder);

    if (!getFolderResponse) {
      return res.status(404).send(FOLDER_NOT_FOUND(folder));
    }

    const getFileResponse = await getFileByNameAndFolderId(
      file,
      getFolderResponse?.goFileFolderId ?? ""
    );

    if (!getFileResponse) {
      return res.status(404).send(FILE_NOT_FOUND(file));
    }

    await removeFile(getFileResponse?.goFileId ?? "");

    await File.deleteOne({ goFileId: getFileResponse?.goFileId ?? "" });

    res.status(204).send();
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
