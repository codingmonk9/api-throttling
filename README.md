# Welcome to API rate limiter.

This is a project for testing rate limiting configuration.

Its developed using Node and express. Please use pnpm to set up and run locally.

## Useful commands

 * `pnpm run test`        perform the jest unit tests
 * `pnpm start`           deploy this stack to your default AWS account/region
 
## Assumptions

Redis connection string is provided as per environment settings. Alternatively local Redis instance should be pointed.

## Testing Instructions

curl or postman can be used to hit the requests parallely.



