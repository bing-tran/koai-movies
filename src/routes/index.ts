import * as express from 'express';
import * as movieApi from './movie.api';

export const routeRegister = (app: express.Application) => {
    // Register movie api
    movieApi.apiRegister(app);

    // TODO: more routes
};
