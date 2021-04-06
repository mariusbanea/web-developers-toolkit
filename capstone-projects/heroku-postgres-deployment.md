# How to fix common Node/pg compatability issues locally and on Heroku

Certain versions of the pg library do not play nice with certain versions of node.

The following combinations are known to work:

- Node v12 and pg@7
- Node >=v14 and pg@8

Additionally, different versions of pg on heroku requires certain ssl options to be set certain ways.


## Steps to fix

If you're having issues with migrating the database or connecting to the database with your app locally or remotely, try the following steps:

1. Run the command `node -v` then **find the related section** for your local version of node

## If you have Node v12 installed locally

2. In `package.json` in your dependencies set `pg: ^7.18.2`

3. In `package.json` add or update the following lines:
  ```
  "engines": {
    "node": "12.x"
  }
  ```

  This tells Heroku what version of node to use, and we chose the same version you are running locally.

4. Add the following lines to the top of `postgrator-config.js` *and* `server.js`
  ```
  const pg = require('pg');
  pg.defaults.ssl = process.env.NODE_ENV === "production";
  ```
  This will set the correct SSL flag for heroku, without breaking your app for local development

  > Note: Make sure that you don't have the SSL options set another way, such as `ssl: true` in your postgrator options

## If you have Node v14 or above installed locally

2. In `package.json` in your dependencies set `pg: ^8.5.1`

3. In `package.json` add or update the following lines:
  ```
  "engines": {
    "node": "14.x"
  }
  ```

   This tells Heroku what version of node to use, and we chose the same version you are running locally.

4. Add the following lines to the top of `postgrator-config.js` *and* `server.js`
  ```
  const pg = require('pg');
  pg.defaults.ssl = process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false;
  ```

  This will set the correct SSL flag for heroku, without breaking your app for local development

  > Note: Make sure that you don't have the SSL options set another way, such as `ssl: true` in your postgrator options
