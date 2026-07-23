# Welcome to API rate limiter.

This project repo addresses API throttling and rate limiting for different routes, while exploring various throttling algorithms.

Its developed using Node and express. Please use pnpm to set up and run locally.

## Useful commands

 * `pnpm run test`        performs the unit tests
 * `pnpm start`           runs the server
 
## Environment Configuration

* Redis connection string should be provided. Alternatively local Redis instance should be pointed.
* API quota and interval for /foo, can be configured by LIMIT & INTERVAL in .env.
* Maximum concurrent requestes can be configured by updating MAX_CONCURRENT_REQUESTS in .env.
* API keys as passed from request auth header, should be configured at CLIENT1 & CLIENT2 in .env.

## Testing Instructions

curl or postman can be used to hit the requests parallely. Following routes are available for access.

* / - default route
* /foo - for first client
* /bar - for  second client



