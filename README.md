# zen-api

> 101 Zen Koans served in a Node API
> 
> Data provided from [web-scraper](https://github.com/adnjoo/web-scraper)
> 
> [Deployed API](https://quiet-taiga-57745.herokuapp.com/)

## Quickstart

```
git clone https://github.com/adnjoo/zen-api
cd zen-api
npm install
psql -U postgres < schema.sql
node seed
nodemon server
```

## Dependencies

- [cors](https://ghub.io/cors): Node.js CORS middleware
- [csv-parse](https://ghub.io/csv-parse): CSV parsing implementing the Node.js `stream.Transform` API
- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a node.js app.
- [package-json-to-readme](https://ghub.io/package-json-to-readme): Generate a README.md from package.json contents
- [pg](https://ghub.io/pg): PostgreSQL client - pure javascript &amp; libpq with the same API

## Example api calls

Get all
```
http://localhost:4001/

https://quiet-taiga-57745.herokuapp.com/
```

Get koan by id
```
http://localhost:4001/?id=42

https://quiet-taiga-57745.herokuapp.com/?id=42
```

## Local

.env example for Local Use
```
PORT=4001
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=root
PGDATABASE=zendb
PGPORT=5432
```

## Heroku

Swap out commented code in controller.js and db.js

