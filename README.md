# koai-movies

The sample project to demonstrate nodejs restful api & swagger UI

## Project Initialization

Create a new folder `koai-movies`, then `cd` into that folder and run statements to initialize project</br>

```bash
    mkdir koai-movies && cd koai-movies
    npm init -y
```

Install required global & dependency packages, init compiler and linting configuration

```bash
    npm install -g typescript tslint
    npm install --save-dev tslint tsc ts-node typescript
    tsc --init
    tslint --init
```

Configure your typescript code compiler setting options in `tsconfig.json`</br>
Config your typescript code linting setting options in `tslint.json`</br>
</br>
Install dependency packages `express` and `body-parser` for the restful api

```bash
    npm install --save express body-parser
    npm install --save-dev @types/express @types/body-parser
```

Install packages for data accessing and create db file

```bash
    npm install --save-dev typeorm
    npm install --save sqlite3
    sqlite3 database.db
```

Then inside the `sqlite3>` console, initialize the database

```bash
    sqlite3> .databases
```

Install packages for using Swagger UI and Swagger JsDoc to document restful api

```bash
    npm install --save swagger-ui-express swagger-jsdoc
    npm install --save-dev @types/swagger-ui-express @types/swagger-jsdoc
```

## Database development

Prefer implementation in `./src/db/**/*` to see simple database accessing

## Middleware development

Prefer implementation in `./src/middleware/**/*` for `express` middleware configuration

## Api routes

Prefer implementation in `./src/routes/**/*` for `express` restful api definition

## Swagger docs

Prefer implementation in `./src/middleware/swagger.middleware.ts` for `express` Swagger UI docs configuration
Restful Api documentation follow [Swagger 3.0.x Specification](https://swagger.io/docs/specification/about/) by jsdoc each api declaration in `./src/routes/*.api.ts`

## Run

Type `npm start` in current terminal windows to build & run the project
Browse `http://localhost:5009/swagger` to see Restful Api service operations
