
import {type Request, type Response } from 'express';

const authenticateApiKey = (req: Request, res: Response, next:any) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or malformed token' });
  }
  
  const apiKey = authHeader.split(' ')[1];
  const expectedKey = findClientKey(req.originalUrl);  
  if (apiKey !== expectedKey ) {
    return res.status(403).json({ error: 'Invalid API Key' });
  }
  next();
};

const findClientKey = (path:string) => {
  switch (path){
    case process.env.CLIENT1:
      return process.env.API_KEY_CLIENT1;
    case process.env.CLIENT2:
      return process.env.API_KEY_CLIENT2;
  }
}

export default authenticateApiKey;