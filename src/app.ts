import express, { type Express, type Request, type Response } from 'express';
import 'dotenv/config'
import { toNumber } from 'lodash-es';
import { Redis } from "ioredis";


import indexRouter from '../routes/index.ts';
import authenticateApiKey from './auth.ts';
import fooRouter from '../routes/foo.ts';
import barRouter from '../routes/bar.ts';

const redis = new Redis(process.env.REDIS_URL ?? 'redis://127.0.0.1:6379');
const app: Express = express();

await redis.set('barCounter', 0);
app.set('appState', { fooCounter: 0 });

setInterval(async () => {
  await redis.set('barCounter', 0);
}, toNumber(process.env.INTERVAL))

app.use('/', indexRouter);
app.use('/foo', authenticateApiKey, fooRouter);
app.use('/bar', authenticateApiKey, barRouter);

export default app;
