import axios from "axios";
import logger from "../infra/logger";

const getServer = async () => {
  logger.info("goFileApi - getServer");
  const server = await axios.get("https://api.gofile.io/getServer");
  return server.data.data;
};

export const createFolder = async (name: string) => {
  logger.info("goFileApi - createFolder");
  const data = {
    parentFolderId: process.env.PARENT_FOLDER_ID,
    token: process.env.GO_FILE_TOKEN,
    folderName: name,
  };

  const response = await axios.put("https://api.gofile.io/createFolder", data);
  return response.data;
};

export const uploadFile = async (file: any, folderId: string) => {
  logger.info("goFileApi - uploadFile");
  const formdata = new FormData();
  const blob = new Blob([file.file.data], { type: "text/xml" });

  formdata.append("file", blob, file.file.name);
  formdata.append("token", process.env.GO_FILE_TOKEN ?? "");
  formdata.append("folderId", folderId);

  const requestOptions: object = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const serverResponse = await getServer();

  const uploadUrl = `https://${serverResponse.server}.gofile.io/uploadFile`;

  const uploadResponse = await fetch(uploadUrl, requestOptions);

  const createdFile = await uploadResponse.json();
  return createdFile.data;
};

export const removeFile = async (fileId: string) => {
  logger.info("goFileApi - removeFile");
  const data = {
    token: process.env.GO_FILE_TOKEN,
    contentsId: fileId,
  };

  await axios.delete("https://api.gofile.io/deleteContent", {
    data,
  });
};
