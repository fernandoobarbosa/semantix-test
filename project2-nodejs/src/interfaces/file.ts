import { Document } from "mongoose";

export default interface IFile extends Document {
  name: string;
  goFileFolderId: string;
  goFileId: { type: string },
}
