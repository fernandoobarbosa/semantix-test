import { Schema } from "mongoose";
import IFile from "../../../interfaces/file";

import mongoose from '../config'

const FileSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    goFileFolderId: { type: String, required: true },
    goFileId: { type: String, required: true },
  }
);

export default mongoose.model<IFile>("Files", FileSchema);
