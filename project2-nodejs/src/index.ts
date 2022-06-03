import express from 'express';
import dotenv from 'dotenv';
import fileRoute from './infra/routes/fileRoute';

dotenv.config();
const app = express();

fileRoute(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
