import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';

import fileRoute from './infra/routes/fileRoute';
import folderRoute from './infra/routes/folderRoute';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({
  limits: { fileSize: 1024 * 1024 * 1024 },
}));
app.use(bodyParser.json({limit: '250mb'}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Working!');
})

fileRoute(app);
folderRoute(app);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
