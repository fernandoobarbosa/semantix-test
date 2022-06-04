import express, { Request, Response } from 'express';

const fileRoute = (app: express.Application) => {
  app.post('/files', (req:Request, res:Response) => {
    res.send(req.body);
  });
};

export default fileRoute;
