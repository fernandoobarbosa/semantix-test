import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import fileRoute from './infra/routes/fileRoute';
import folderRoute from './infra/routes/folderRoute';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Working!');
})

fileRoute(app);
folderRoute(app);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
