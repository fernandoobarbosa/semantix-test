import express, { Request, Response } from 'express';

const fileRoute = (app: express.Application) => {
  app.get('/file', (req:Request, res:Response) => {
    res.send('Hello world!');
  });
};

export default fileRoute;
