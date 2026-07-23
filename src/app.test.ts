import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from './app.ts';
import authenticateApiKey from './auth.ts'

describe('GET /', () => {
  it('returns 200 with message', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);

    expect(res.body.message).toBe('Please access /foo and /bar routes to test this application.');
  });

  it('returns 401 without auth token', async () => {
    const res = await request(app)
      .get('/bar')
      .expect(401);

    expect(res.body.error).toBe('Missing or malformed token');
  });

  it('returns 403 with incorrect API key', async () => {
    const res = await request(app)
      .get('/bar')
      .set('Authorization', 'Bearer client-1')
      .expect(403);

    expect(res.body.error).toBe('Invalid API Key');
  });

  it('passes auth with valid Bearer token', async () => {
    const res = await request(app)
      .get('/foo')
      .set('Authorization', 'Bearer client-1')
      .expect(200);

    expect(JSON.stringify(res.body)).toBe('{"succes":true}');
  });
});
