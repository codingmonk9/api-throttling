import express, { type Express, type Request, type Response } from 'express';
import { Redis } from 'ioredis';
import { toNumber } from 'lodash-es';

const router = express.Router();
const redis = new Redis(process.env.REDIS_URL ?? 'redis://127.0.0.1:6379');

let barCounter = null;
let numCounter = 0;

router.get('/', async (req: Request, res: Response) => {
  barCounter = await redis.get('barCounter');
  numCounter = toNumber(barCounter);
  
  if (barCounter && numCounter < toNumber(process.env.LIMIT)) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    await redis.incr('barCounter')
    res.end(JSON.stringify({ succes: true }));
  } else {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'rate limit exceeded' }));
  }
});

export default router;
