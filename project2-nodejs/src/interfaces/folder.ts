import { Document } from "mongoose";

export default interface IFolder extends Document {
  name: string;
  goFileFolderId: string;
}
