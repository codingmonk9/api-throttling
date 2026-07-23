# Welcome to API rate limiter.

This is a project for testing rate limiting configuration.

Its developed using Node and express. Please use pnpm to set up and run locally.

## Useful commands

 * `pnpm run test`        perform the unit tests
 * `pnpm start`           run the server
 
## Assumptions

Redis connection string is provided as per environment settings. Alternatively local Redis instance should be pointed.

## Testing Instructions

curl or postman can be used to hit the requests parallely. Following routes are available for access.

* / - default route
* /foo - for first client
* /bar - for  second client



