import { Schema } from "mongoose";
import IFolder from "../../../interfaces/folder";

import mongoose from '../config'

const FolderSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    goFileFolderId: { type: String, required: true },
  }
);

export default mongoose.model<IFolder>("Folders", FolderSchema);
