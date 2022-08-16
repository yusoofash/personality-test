import { Request, Response } from 'express';

const defaultErrorHandle = (err: any, req: Request, res: Response) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(err.statusCode).json({
    status: statusCode,
    message
  });
};

export default defaultErrorHandle;
