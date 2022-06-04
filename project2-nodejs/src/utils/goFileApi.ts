import axios from "axios";

export const folderCreation = async (name: string) => {
  
    const data = {
      parentFolderId: process.env.PARENT_FOLDER_ID,
      token: process.env.GO_FILE_TOKEN ,
      name: name,
    };
    await axios.put("https://api.gofile.io/createFolder", data);
};
