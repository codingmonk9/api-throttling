import express, { type Express, type Request, type Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response, next) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Please access /foo and /bar routes to test this application.' }));
});

export default router;
