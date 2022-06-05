import axios from "axios";

const getServer = async()=>{
const server = await axios.get("https://api.gofile.io/getServer");
return server.data.data;
}

export const createFolder = async (name: string) => {
  const data = {
    parentFolderId: process.env.PARENT_FOLDER_ID,
    token: process.env.GO_FILE_TOKEN,
    folderName: name,
  };

  const response = await axios.put("https://api.gofile.io/createFolder", data);
  return response.data;
};

export const uploadFile = async (file: any, folderId: string) => {
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

    const uploadResponse = await fetch(
      uploadUrl,
      requestOptions
    );

      const createdFile = await uploadResponse.json();
      return createdFile.data;
};
