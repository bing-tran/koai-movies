import express from 'express';
import * as bodyParser from 'body-parser';
import { connect } from './db/db';
import * as middleware from './middleware';
import * as routes from './routes';

connect();

const app = express();

// Register middleware
middleware.middlewareRegister(app);

app.get('/', (req, res) =>
    res.send(
        '<h1 style="position: absolute; left: 50%; top: 5%; transform: translate(-50%, -50%)">Koai Movies Service v1</h1>'
    )
);

// Register RESTFul Api routes
routes.routeRegister(app);

export { app };
