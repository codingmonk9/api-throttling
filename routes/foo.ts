import express, { type Request, type Response } from 'express';
import { toNumber } from 'lodash-es';
const router = express.Router();

router.get('/', (req: Request, res: Response, next) => {
  const state = req.app.get('appState');
  
  if (state.fooCounter < toNumber(process.env.MAX_CONCURRENT_REQUESTS)) {
    state.fooCounter++;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ succes: true }));
  } else {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'rate limit exceeded' }));
    state.fooCounter--;
  }
});

export default router;
